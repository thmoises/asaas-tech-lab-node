class CustomBurstUtils {
  private burstControll: any[] = [];

  constructor(){}

  tryUse(username: string) {
    console.log(username)
    let index = this.burstControll.findIndex((x) => x.username === username);
    
    if (index >= 0) {
      if (this.burstControll[index].count >= 10) {
        return false;
      } else {
        this.burstControll[index].count++;
      }
    } else {
      this.burstControll.push({ username, count: 1 });
      index = 0;
    }
    console.log(index);
    return index >= 0;
  }

  release(username: string){
    console.log(username)
    let index = this.burstControll.findIndex((x) => x.username === username);
    if (index >= 0) this.burstControll[index].count--;

  }
}


export default CustomBurstUtils;