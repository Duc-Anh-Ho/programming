// 3.8: quadratic
public class lab {
    public static void main(String[] args) {
        quadratic(1, -7, 12);
    }

    public static void quadratic(int a, int b, int c) {
        double x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        double x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        System.out.println("First root = " + x1);
        System.out.println("Second root = " + x2);
    }
}