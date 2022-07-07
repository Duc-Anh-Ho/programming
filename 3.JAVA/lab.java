// 4.4: daysInMonth
public class lab {
    public static void main(String[] args) {
            System.out.print(daysInMonth(9));
        } 
    public static int daysInMonth(int month){
        if (month == 1 || month == 3 || month == 5 || month == 7 ||month == 8 || month == 10 || month == 12){
            return 31;
        }
        else if (month == 2) {
            return 28;
        } else {
             return 30;
        }
    }
}