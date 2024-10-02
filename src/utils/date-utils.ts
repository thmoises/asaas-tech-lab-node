class CustomDateUtils {
  public static formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}

export default CustomDateUtils;
