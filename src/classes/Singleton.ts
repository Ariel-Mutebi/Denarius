class Singleton {
  // A static map to store instances for derived classes
  static instances = new Map();

  constructor() {
    const className = this.constructor.name;
    
    if (Singleton.instances.get(className)) {
      throw new Error(`An instance of ${className} already exists!`);
    }

    Singleton.instances.set(className, this);
  }

  // Static method to get or create the singleton instance
  static getInstance() {
    const className = this.name;

    if (!Singleton.instances.get(className)) {
      Singleton.instances.set(className, new this());
    }

    return Singleton.instances.get(className);
  }
}

export default Singleton