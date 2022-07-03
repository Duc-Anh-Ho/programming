// 1.16: Shining
public class Shining {
    public static void main(String[] args) {
        int x = 100;
        txt();
        System.out.println(txt.getClass().getSimpleName());
        System.out.println(((Object) x).getClass().getSimpleName());

    }

    static public void txt() {
        System.out.println("All work and no play makes Jack a dull boy.");
    }
}