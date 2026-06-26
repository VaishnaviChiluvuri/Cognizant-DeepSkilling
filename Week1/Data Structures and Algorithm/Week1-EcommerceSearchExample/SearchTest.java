import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {

                new Product(105, "Keyboard", "Electronics"),
                new Product(101, "Laptop", "Electronics"),
                new Product(104, "Shoes", "Fashion"),
                new Product(103, "Watch", "Accessories"),
                new Product(102, "Mobile", "Electronics")

        };

        System.out.println("Linear Search:");

        Product result = SearchAlgorithms.linearSearch(products, 103);

        if (result != null)
            result.display();
        else
            System.out.println("Product Not Found");

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        System.out.println();

        System.out.println("Binary Search:");

        result = SearchAlgorithms.binarySearch(products, 103);

        if (result != null)
            result.display();
        else
            System.out.println("Product Not Found");

    }

}