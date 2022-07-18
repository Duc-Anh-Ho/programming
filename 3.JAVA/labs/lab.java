// 7.7: kthLargest
public class lab {
    public static void main(String[] args) {
        int[] arr = { 74, 85, 102, 99, 101, 56, 84 };
        System.out.println(kthLargest(0, arr));
    }

    public static int kthLargest(int numOrder, int[] arr) {
        int temp = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (temp < arr[i]) {
                arr[i] = temp;
            }
        }
        return arr[numOrder];
    }
}