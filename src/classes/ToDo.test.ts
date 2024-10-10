import { dateWithinMonth, dateWithinPastWeek, dateWithinWeek, today } from "../functions/dateGenerators";
import instancePropertyCheck from "../functions/instancePropertyCheck";
import makeStringIndexable from "../typeCasters/makeStringIndexable";
import BankInstance from "./Bank";
import ToDo from "./ToDo";

describe("ToDo class: ", () => {
  let title = "Test ToDo class initialization"
  let description = "Use Jest to perform unit test on the ToDo module"
  let dueDate = today
  let priorityInteger = 3
  const toDo = new ToDo(title, description, dueDate, priorityInteger)

  const toDoPropertiesEqualFunctionScopedVariables = () => {
    instancePropertyCheck(makeStringIndexable(toDo), { title, description, dueDate, priorityInteger })
  }

  test("initializes an object with all expected properties.", toDoPropertiesEqualFunctionScopedVariables)

  test(".updateProperties method works as expected.", () => {
    title = "Test ToDo class .updateProperties method"
    dueDate = new Date()
    toDo.updateProperties({ title, dueDate })
    toDoPropertiesEqualFunctionScopedVariables()
  })

  test(".toggleCheck() method toggles .isChecked boolean property.", () => {
    const initialIsChecked = toDo.isChecked
    toDo.toggleIsChecked()
    expect(toDo.isChecked).toBe(!initialIsChecked)
    toDo.toggleIsChecked()
    expect(toDo.isChecked).toBe(initialIsChecked)
  })

  test(".getWorth() method returns a number.", () => {
    expect(typeof toDo.getWorth()).toBe("number")
  })

  test("if .dueDate day is greater than today, .isOverdue() returns true, else false.", () => {
    toDo.updateProperties({ dueDate: dateWithinPastWeek })
    expect(toDo.isOverDue()).toBe(true)

    toDo.updateProperties({ dueDate: today })
    expect(toDo.isOverDue()).toBe(false)

    toDo.updateProperties({ dueDate: dateWithinWeek })    
    expect(toDo.isOverDue()).toBe(false)
  })

  const bankCCTV = {
    depositOffice: jest.spyOn(BankInstance, "deposit"),
    deductOffice: jest.spyOn(BankInstance, "deduct")
  }

  test("if not .isChecked, .awardCompletion() has no side-effects to Bank.", () => {
    if(toDo.isChecked) toDo.toggleIsChecked()
    toDo.awardCompletion()
    expect(bankCCTV.depositOffice).not.toHaveBeenCalled()
    expect(bankCCTV.deductOffice).not.toHaveBeenCalled()
  })

  test("can NOT call .awardCompletion() twice (when .isChecked).", () => {
    if(!toDo.isChecked) toDo.toggleIsChecked()
    toDo.awardCompletion()
    expect(toDo.awardCompletion).toThrow()
  })

  test("if is checked and overdue, .awardCompletion() calls Bank.deduct, else Bank.award.", () => {
    const toDoNotOverdue = new ToDo("Tomorrow", "I will love you tomorrow.", dateWithinMonth(), 3, true)
    toDoNotOverdue.awardCompletion()
    expect(bankCCTV.depositOffice).toHaveBeenCalled()
    expect(bankCCTV.deductOffice).not.toHaveBeenCalled()

    const toDoOverdue = new ToDo("Yesterday", "I remember you like yesterday.", dateWithinPastWeek, 2, true)
    toDoOverdue.awardCompletion()
    expect(bankCCTV.deductOffice).toHaveBeenCalled()
    expect(bankCCTV.deductOffice).not.toHaveBeenCalledTimes(2)
  })
})