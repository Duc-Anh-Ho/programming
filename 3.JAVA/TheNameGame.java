
// 3.22: TheNameGameExercise
import java.util.Scanner;

public class TheNameGame {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("What is your name? "); // asks question first,
        String first = scan.next(); // THEN accepts first
        String last = scan.next(); // and last name
        String newFirst = first.substring(1);
        String newLast = last.substring(1);

        playGame(first, newFirst);
        System.out.println();
        playGame(last, newLast);
    }

    public static void playGame(String name, String nn) {
        System.out.println(name + " " + name + ", " + "bo-B" + nn);
        System.out.println("Banana-fana fo-F" + nn);
        System.out.println("Fee-fi-mo-M" + nn);
        System.out.println(name.toUpperCase() + "!");
    }
}