
// 4.20: numUnique
import java.util.Scanner;

public class lab {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("x: ");
        double x = input.nextDouble();
        System.out.print("y: ");
        double y = input.nextDouble();
        System.out.print("z: ");
        double z = input.nextDouble();
        System.out.println("Unique: " + numUnique(x, y, z));
        input.close();
    }

    public static int numUnique(double x, double y, double z) {
        int number = 3;
        if (x - y == 0) {
            number -= 1;
        }
        if (x - z == 0) {
            number -= 1;
        }
        if (y - z == 0) {
            number -= 1;
        }
        if (x == y && x == z) {
            number += 1;
        }
        return number;
    }
}