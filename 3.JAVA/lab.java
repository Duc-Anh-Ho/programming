public class lab {
    public static void main(String[] args) {
        int a = 12;
        double b = 13;
        double c = m(a, b);
        System.out.println("c: " + c);

        double d = m(c, a);
        System.out.println("d: " + d);

        double e = m(a, (int) d);
        System.out.println("e: " + e);

        System.out.println("d = " + d);
    }

    public static double m(int x, double y) {
        System.out.println("1: " + (x + y));
        return x + y;
    }

    public static double m(double x, double y) {
        System.out.println("2: " + (x - y));
        return x - y;
    }

    public static double m(int x, int y) {
        System.out.println("3: " + (x % y));
        return x % y;
    }
}