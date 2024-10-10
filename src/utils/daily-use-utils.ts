class CustomDailyUseUtils {
  private controll: any[] = [];

  constructor() {}

  tryUse(username: string) {
    var datetime = new Date();
    const stringDate = datetime.toISOString().slice(0, 10);
    const hash = `${username}-${stringDate}`;

    let index = this.controll.findIndex((x) => x.hash === hash);

    if (index >= 0) {
      if (this.controll[index].count >= 100) {
        return false;
      } else {
        this.controll[index].count++;
      }
    } else {
      this.controll.push({ hash, count: 1 });
      index = 0;
    }
    console.log(index);
    return index >= 0;
  }

  release(username: string) {
    var datetime = new Date();

    const stringDate = datetime.toISOString().slice(0, 10);
    const hash = `${username}-${stringDate}`;

    let index = this.controll.findIndex((x) => x.hash === hash);
    if (index >= 0) this.controll[index].count--;
  }
}

export default CustomDailyUseUtils;
