class Singleton {
  static instantiated = false;

  constructor() {
    const className = this.constructor.name;
    
    if (Singleton.instantiated) {
      throw new Error(`An instance of ${className} already exists!`);
    };

    Singleton.instantiated = true;
  };
};

export default Singleton;