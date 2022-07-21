// 7.14: contains 
public class lab {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 1, 2, 3};
        int[] arr2 = {1, 2, 3};
        // int[] arr1 = {1, 2, 1};
        // int[] arr2 = {1, 2, 2, 2, 5, 7, 9, 9, 9};
        System.out.println(contains(arr1, arr2));
    }

    public static boolean contains(int[] arr1, int[] arr2) {
        int temp = 0;
        int[] longerArr = arr1;
        int[] shorterArr = arr2;
        if (arr2.length > arr1.length) {
            longerArr = arr2;
            shorterArr = arr1;
        }
        System.out.println("shorterArr " +shorterArr.length);
        System.out.println("longerArr " +longerArr.length);
        for (int i = 0; i < longerArr.length; i++) {
            System.out.println("i " + i + " temp " + temp);
            if (longerArr[i] == shorterArr[temp]) {
                temp++;
            } 
            else {
                temp = 0;
                // Check again when reset temp 
                if (longerArr[i] == shorterArr[temp]) {
                  temp++;
                }
            }
            if (temp == shorterArr.length) {
                return true;
            }
        }
    return false;
    }
}