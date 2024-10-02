import bcrypt from 'bcrypt';

class Encoder {
  async matches(rawValue: string, encodedValue: string): Promise<boolean> {
    return bcrypt.compare(rawValue, encodedValue);
  }

  async encode(rawValue: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(rawValue, saltRounds);
  }
}

export default new Encoder();
