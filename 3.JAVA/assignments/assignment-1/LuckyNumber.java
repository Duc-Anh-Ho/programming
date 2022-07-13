import java.util.Scanner;

public class LuckyNumber {
    public static Scanner input = new Scanner(System.in);
    public static int randomMax = 100;
    public static int randomNumber = createRandomNumber(randomMax);

    public static void main(String arg[]) {
        System.out.println("NUM: " + randomNumber); // TEST randomNumber
        System.out.println("Please guess the secret number between 0 end " + randomMax + " !");
        checkNumber();
        checkPlayAgain(input);
    }

    // Create a random number
    public static int createRandomNumber(int max) {
        return (int) (Math.random() * (max + 1)); // Add 1 to take last number in rank
    }

    // Take input number
    public static int inputNumber(Scanner input) {
        System.out.print("Your guess: ");
        int inputNumber = input.nextInt();
        return inputNumber;
    }

    // Compare input number
    public static void checkNumber() {
        int inputNumber = inputNumber(input);
        if (inputNumber > randomNumber) {
            System.out.println("Sorry! Your input number is GREATER than the secret number!");
            checkNumber();
        } else if (inputNumber < randomNumber) {
            System.out.println("Sorry! Your input number is LOWER than the secret number!");
            checkNumber();
        } else {
            System.out.println("Congratulation! You've found out the secret number.");
        }
    }

    // Play again comfirmation
    public static void checkPlayAgain(Scanner input) {
        System.out.println("Do you wanna guess another secret number?");
        String confirm = input.next().toLowerCase();
        if (confirm.matches("y|yes")) {
            randomNumber = createRandomNumber(randomMax);
            System.out.println("NUM: " + randomNumber); // TEST randomNumber
            checkNumber();
            checkPlayAgain(input);
        }
    }
}