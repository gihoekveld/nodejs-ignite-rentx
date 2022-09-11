import { v4 as uuidV4 } from "uuid";

class Specification {
  created_at: Date;
  description: string;
  id?: string;
  name: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Specification };
