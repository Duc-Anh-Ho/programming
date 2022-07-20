// 7.14: contains 
public class lab {
    public static void main(String[] args) {
        int[] arr1 = { 1, 6, 2, 1, 4, 1, 2, 1, 8 };
        int[] arr2 = { 1, 2, 2 };
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
        for (int i = 0; i < shorterArr.length; i++)

            return false;
    }
}