export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  category: "Java" | "JavaScript"
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "java-basics",
    title: "Giới Thiệu Về Java - Ngôn Ngữ Lập Trình Mạnh Mẽ",
    description: "Tìm hiểu về Java, một trong những ngôn ngữ lập trình phổ biến nhất thế giới, và tại sao nó lại quan trọng trong lập trình mạng.",
    date: "2024-12-15",
    category: "Java",
    content: `
# Giới Thiệu Về Java - Ngôn Ngữ Lập Trình Mạnh Mẽ

Java là một ngôn ngữ lập trình hướng đối tượng, được phát triển bởi Sun Microsystems (nay thuộc Oracle) vào năm 1995. Với khẩu hiệu "Write Once, Run Anywhere" (Viết một lần, chạy mọi nơi), Java đã trở thành một trong những ngôn ngữ lập trình phổ biến nhất thế giới.

## Đặc Điểm Nổi Bật Của Java

### 1. Độc Lập Với Nền Tảng
Java sử dụng máy ảo Java (JVM) để thực thi code, cho phép chương trình Java chạy trên bất kỳ hệ điều hành nào có cài đặt JVM.

### 2. Hướng Đối Tượng
Java là ngôn ngữ lập trình hướng đối tượng thuần túy, hỗ trợ các khái niệm như:
- **Encapsulation** (Đóng gói)
- **Inheritance** (Kế thừa)
- **Polymorphism** (Đa hình)
- **Abstraction** (Trừu tượng)

### 3. Bảo Mật
Java có hệ thống bảo mật mạnh mẽ với:
- Security Manager
- Bytecode verification
- Sandboxing

## Ứng Dụng Trong Lập Trình Mạng

Java được sử dụng rộng rãi trong:
- **Web Development**: Spring Framework, JavaServer Faces
- **Enterprise Applications**: Java EE
- **Mobile Development**: Android
- **Network Programming**: Socket programming, RMI

## Ví Dụ Code Đơn Giản

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

## Kết Luận

Java là một ngôn ngữ mạnh mẽ và linh hoạt, phù hợp cho nhiều loại ứng dụng khác nhau, đặc biệt là trong lĩnh vực lập trình mạng và phát triển enterprise.
    `.trim(),
  },
  {
    id: "java-oop",
    title: "Lập Trình Hướng Đối Tượng Trong Java",
    description: "Khám phá các khái niệm cốt lõi của OOP trong Java: Class, Object, Inheritance, Polymorphism và Encapsulation.",
    date: "2024-12-16",
    category: "Java",
    content: `
# Lập Trình Hướng Đối Tượng Trong Java

Lập trình hướng đối tượng (OOP) là một trong những khái niệm quan trọng nhất trong Java. Bài viết này sẽ giúp bạn hiểu rõ các nguyên lý cốt lõi của OOP.

## Các Khái Niệm Cốt Lõi

### 1. Class và Object

**Class** là một khuôn mẫu để tạo ra các đối tượng. **Object** là một instance (thể hiện) của class.

\`\`\`java
// Định nghĩa class
public class Student {
    private String name;
    private int age;
    
    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
}
\`\`\`

### 2. Encapsulation (Đóng Gói)

Encapsulation giúp ẩn dấu chi tiết triển khai và chỉ cho phép truy cập thông qua các phương thức công khai.

\`\`\`java
public class BankAccount {
    private double balance; // private - không thể truy cập trực tiếp
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}
\`\`\`

### 3. Inheritance (Kế Thừa)

Inheritance cho phép một class kế thừa các thuộc tính và phương thức từ class khác.

\`\`\`java
// Parent class
public class Animal {
    protected String name;
    
    public void makeSound() {
        System.out.println("Some sound");
    }
}

// Child class
public class Dog extends Animal {
    public Dog(String name) {
        this.name = name;
    }
    
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}
\`\`\`

### 4. Polymorphism (Đa Hình)

Polymorphism cho phép các đối tượng khác nhau phản hồi cùng một thông điệp theo cách riêng của chúng.

\`\`\`java
Animal myDog = new Dog("Buddy");
Animal myCat = new Cat("Whiskers");

myDog.makeSound(); // Output: Woof!
myCat.makeSound(); // Output: Meow!
\`\`\`

## Lợi Ích Của OOP

- **Code Reusability**: Tái sử dụng code
- **Maintainability**: Dễ bảo trì
- **Scalability**: Dễ mở rộng
- **Modularity**: Tính module hóa cao

## Kết Luận

Hiểu rõ OOP là nền tảng quan trọng để trở thành một lập trình viên Java giỏi. Hãy thực hành nhiều để nắm vững các khái niệm này!
    `.trim(),
  },
  {
    id: "java-collections",
    title: "Java Collections Framework - Cấu Trúc Dữ Liệu Mạnh Mẽ",
    description: "Tìm hiểu về Collections Framework trong Java: List, Set, Map và cách sử dụng chúng hiệu quả.",
    date: "2024-12-17",
    category: "Java",
    content: `
# Java Collections Framework - Cấu Trúc Dữ Liệu Mạnh Mẽ

Java Collections Framework cung cấp một bộ các interface và class để quản lý nhóm các đối tượng một cách hiệu quả.

## Các Interface Chính

### 1. List Interface

List là một collection có thứ tự, cho phép phần tử trùng lặp.

\`\`\`java
import java.util.*;

// ArrayList - mảng động
List<String> arrayList = new ArrayList<>();
arrayList.add("Java");
arrayList.add("Python");
arrayList.add("JavaScript");

// LinkedList - danh sách liên kết
List<Integer> linkedList = new LinkedList<>();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
\`\`\`

### 2. Set Interface

Set là một collection không có thứ tự, không cho phép phần tử trùng lặp.

\`\`\`java
// HashSet - không có thứ tự
Set<String> hashSet = new HashSet<>();
hashSet.add("Apple");
hashSet.add("Banana");
hashSet.add("Apple"); // Bị bỏ qua

// TreeSet - có thứ tự
Set<Integer> treeSet = new TreeSet<>();
treeSet.add(3);
treeSet.add(1);
treeSet.add(2);
// Kết quả: [1, 2, 3]
\`\`\`

### 3. Map Interface

Map lưu trữ dữ liệu dưới dạng key-value pairs.

\`\`\`java
// HashMap
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("Java", 95);
hashMap.put("Python", 90);
hashMap.put("JavaScript", 88);

// Lấy giá trị
int javaScore = hashMap.get("Java");

// TreeMap - có thứ tự theo key
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("Zebra", 1);
treeMap.put("Apple", 2);
treeMap.put("Banana", 3);
// Keys được sắp xếp: Apple, Banana, Zebra
\`\`\`

## So Sánh Các Collection

| Collection | Thứ Tự | Trùng Lặp | Null Values |
|------------|--------|-----------|-------------|
| ArrayList | Có | Cho phép | Cho phép |
| HashSet | Không | Không | Cho phép 1 |
| TreeSet | Có (sắp xếp) | Không | Không |
| HashMap | Không | Key không | Cho phép |

## Ví Dụ Thực Tế

\`\`\`java
// Đếm số lần xuất hiện của từ
Map<String, Integer> wordCount = new HashMap<>();
String[] words = {"hello", "world", "hello", "java"};

for (String word : words) {
    wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
}

// Kết quả: {hello=2, world=1, java=1}
\`\`\`

## Best Practices

1. **Chọn đúng collection**: ArrayList cho truy cập nhanh, LinkedList cho thêm/xóa
2. **Sử dụng generics**: Đảm bảo type safety
3. **Iterator**: Sử dụng iterator khi cần xóa phần tử trong vòng lặp

## Kết Luận

Collections Framework là công cụ mạnh mẽ giúp quản lý dữ liệu hiệu quả. Hiểu rõ từng loại collection sẽ giúp bạn viết code tốt hơn!
    `.trim(),
  },
  {
    id: "java-exceptions",
    title: "Xử Lý Exception Trong Java",
    description: "Học cách xử lý lỗi và exception trong Java một cách hiệu quả với try-catch, finally và custom exceptions.",
    date: "2024-12-18",
    category: "Java",
    content: `
# Xử Lý Exception Trong Java

Exception handling là một phần quan trọng trong lập trình Java, giúp xử lý các tình huống lỗi một cách graceful.

## Các Loại Exception

### 1. Checked Exceptions

Phải được xử lý hoặc khai báo trong method signature.

\`\`\`java
import java.io.*;

public class FileExample {
    public void readFile() throws IOException {
        FileReader file = new FileReader("test.txt");
        // Phải xử lý IOException
    }
}
\`\`\`

### 2. Unchecked Exceptions

Không bắt buộc phải xử lý (RuntimeException và các subclass).

\`\`\`java
public class ArrayExample {
    public void accessArray() {
        int[] arr = new int[5];
        int value = arr[10]; // ArrayIndexOutOfBoundsException
    }
}
\`\`\`

## Cấu Trúc Try-Catch-Finally

\`\`\`java
try {
    // Code có thể gây exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Xử lý exception
    System.out.println("Không thể chia cho 0: " + e.getMessage());
} finally {
    // Luôn được thực thi
    System.out.println("Khối finally luôn chạy");
}
\`\`\`

## Multiple Catch Blocks

\`\`\`java
try {
    // Code có thể gây nhiều loại exception
    int[] arr = new int[5];
    int value = arr[10];
    int result = 10 / 0;
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Lỗi chỉ số mảng");
} catch (ArithmeticException e) {
    System.out.println("Lỗi toán học");
} catch (Exception e) {
    System.out.println("Lỗi khác: " + e.getMessage());
}
\`\`\`

## Try-With-Resources

Tự động đóng resources sau khi sử dụng.

\`\`\`java
try (FileReader file = new FileReader("test.txt");
     BufferedReader reader = new BufferedReader(file)) {
    String line = reader.readLine();
    // File sẽ tự động đóng
} catch (IOException e) {
    System.out.println("Lỗi đọc file: " + e.getMessage());
}
\`\`\`

## Custom Exception

Tạo exception tùy chỉnh của riêng bạn.

\`\`\`java
// Tạo custom exception
public class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

// Sử dụng
public class Person {
    private int age;
    
    public void setAge(int age) throws InvalidAgeException {
        if (age < 0 || age > 150) {
            throw new InvalidAgeException("Tuổi không hợp lệ: " + age);
        }
        this.age = age;
    }
}
\`\`\`

## Best Practices

1. **Cụ thể trong catch**: Bắt exception cụ thể thay vì Exception chung
2. **Không bỏ qua exception**: Luôn xử lý hoặc log exception
3. **Sử dụng try-with-resources**: Cho file I/O và database connections
4. **Throw sớm, catch muộn**: Throw exception ở nơi xảy ra, catch ở nơi có thể xử lý

## Kết Luận

Xử lý exception đúng cách giúp ứng dụng của bạn robust và dễ debug hơn. Hãy thực hành nhiều để nắm vững!
    `.trim(),
  },
  {
    id: "javascript-basics",
    title: "JavaScript Cơ Bản - Ngôn Ngữ Của Web",
    description: "Khám phá JavaScript từ những khái niệm cơ bản nhất: biến, kiểu dữ liệu, hàm và các cấu trúc điều khiển.",
    date: "2024-12-19",
    category: "JavaScript",
    content: `
# JavaScript Cơ Bản - Ngôn Ngữ Của Web

JavaScript là ngôn ngữ lập trình phổ biến nhất trên web, được sử dụng để tạo ra các trang web tương tác và động.

## Biến và Kiểu Dữ Liệu

### Khai Báo Biến

\`\`\`javascript
// let - có thể thay đổi
let name = "Lê Bá Phát";
let age = 25;

// const - không thể thay đổi
const PI = 3.14159;

// var - function scope (tránh dùng)
var oldWay = "Không nên dùng";
\`\`\`

### Kiểu Dữ Liệu

\`\`\`javascript
// Primitive types
let string = "Hello";
let number = 42;
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;
let symbol = Symbol("id");

// Object types
let object = { name: "Phát", age: 25 };
let array = [1, 2, 3, 4, 5];
let function = () => console.log("Hello");
\`\`\`

## Hàm (Functions)

### Function Declaration

\`\`\`javascript
function greet(name) {
    return \`Xin chào, \${name}!\`;
}

console.log(greet("Phát")); // Xin chào, Phát!
\`\`\`

### Arrow Functions

\`\`\`javascript
// Arrow function
const greet = (name) => {
    return \`Xin chào, \${name}!\`;
};

// Rút gọn
const add = (a, b) => a + b;

// Một tham số
const square = x => x * x;
\`\`\`

## Cấu Trúc Điều Khiển

### If-Else

\`\`\`javascript
let age = 20;

if (age >= 18) {
    console.log("Đã trưởng thành");
} else if (age >= 13) {
    console.log("Vị thành niên");
} else {
    console.log("Trẻ em");
}
\`\`\`

### Switch

\`\`\`javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Đầu tuần");
        break;
    case "Friday":
        console.log("Cuối tuần");
        break;
    default:
        console.log("Ngày khác");
}
\`\`\`

### Vòng Lặp

\`\`\`javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// For...of (cho arrays)
const fruits = ["Apple", "Banana", "Orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

// For...in (cho objects)
const person = { name: "Phát", age: 25 };
for (const key in person) {
    console.log(key, person[key]);
}
\`\`\`

## Arrays

\`\`\`javascript
// Tạo array
const numbers = [1, 2, 3, 4, 5];

// Thêm phần tử
numbers.push(6);
numbers.unshift(0);

// Xóa phần tử
numbers.pop();
numbers.shift();

// Map - transform array
const doubled = numbers.map(n => n * 2);

// Filter - lọc phần tử
const evens = numbers.filter(n => n % 2 === 0);

// Reduce - tính toán
const sum = numbers.reduce((acc, n) => acc + n, 0);
\`\`\`

## Objects

\`\`\`javascript
// Tạo object
const person = {
    name: "Lê Bá Phát",
    age: 25,
    greet: function() {
        return \`Xin chào, tôi là \${this.name}\`;
    }
};

// Truy cập
console.log(person.name);
console.log(person["age"]);

// ES6 shorthand
const name = "Phát";
const age = 25;
const person2 = { name, age };
\`\`\`

## Kết Luận

JavaScript là ngôn ngữ linh hoạt và mạnh mẽ. Nắm vững những kiến thức cơ bản này là nền tảng để học các khái niệm nâng cao hơn!
    `.trim(),
  },
  {
    id: "javascript-dom",
    title: "Thao Tác DOM Với JavaScript",
    description: "Học cách tương tác với DOM (Document Object Model) để tạo ra các trang web động và tương tác.",
    date: "2024-12-20",
    category: "JavaScript",
    content: `
# Thao Tác DOM Với JavaScript

DOM (Document Object Model) là một API cho phép JavaScript tương tác với HTML và CSS của trang web.

## Lấy Phần Tử

\`\`\`javascript
// getElementById
const header = document.getElementById("header");

// querySelector - lấy phần tử đầu tiên
const button = document.querySelector(".btn");
const firstDiv = document.querySelector("div");

// querySelectorAll - lấy tất cả
const allButtons = document.querySelectorAll(".btn");
const allDivs = document.querySelectorAll("div");
\`\`\`

## Thay Đổi Nội Dung

\`\`\`javascript
// textContent - chỉ text
const element = document.querySelector("#myElement");
element.textContent = "Nội dung mới";

// innerHTML - bao gồm HTML
element.innerHTML = "<strong>Nội dung in đậm</strong>";

// innerText - text hiển thị
element.innerText = "Text hiển thị";
\`\`\`

## Thay Đổi Thuộc Tính

\`\`\`javascript
// getAttribute / setAttribute
const link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
const href = link.getAttribute("href");

// Thuộc tính trực tiếp
const img = document.querySelector("img");
img.src = "new-image.jpg";
img.alt = "Mô tả ảnh";
img.className = "new-class";
\`\`\`

## Thay Đổi Style

\`\`\`javascript
const element = document.querySelector("#myElement");

// Thay đổi style trực tiếp
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";

// Thêm/xóa class
element.classList.add("active");
element.classList.remove("inactive");
element.classList.toggle("highlight");
element.classList.contains("active"); // true/false
\`\`\`

## Tạo và Xóa Phần Tử

\`\`\`javascript
// Tạo phần tử mới
const newDiv = document.createElement("div");
newDiv.textContent = "Nội dung mới";
newDiv.className = "new-div";

// Thêm vào DOM
const parent = document.querySelector("#container");
parent.appendChild(newDiv);

// Thêm vào vị trí cụ thể
const firstChild = parent.firstChild;
parent.insertBefore(newDiv, firstChild);

// Xóa phần tử
parent.removeChild(newDiv);
// hoặc
newDiv.remove();
\`\`\`

## Event Listeners

\`\`\`javascript
// Click event
const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    console.log("Button được click!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked!");
});

// Event object
button.addEventListener("click", (event) => {
    console.log("Event:", event);
    console.log("Target:", event.target);
});

// Multiple events
const input = document.querySelector("#myInput");
input.addEventListener("input", handleInput);
input.addEventListener("focus", handleFocus);
input.addEventListener("blur", handleBlur);
\`\`\`

## Ví Dụ Thực Tế

\`\`\`javascript
// Toggle dark mode
const toggleBtn = document.querySelector("#toggleDarkMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
});

// Form validation
const form = document.querySelector("#myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input");
    if (input.value.trim() === "") {
        alert("Vui lòng nhập dữ liệu!");
        return;
    }
    // Xử lý form
    console.log("Form submitted:", input.value);
});
\`\`\`

## Best Practices

1. **Cache DOM elements**: Lưu reference để tránh query nhiều lần
2. **Event delegation**: Sử dụng cho dynamic content
3. **Avoid inline styles**: Sử dụng classes thay vì style trực tiếp
4. **Clean up**: Remove event listeners khi không cần

## Kết Luận

Thao tác DOM là kỹ năng cơ bản nhưng quan trọng trong JavaScript. Thực hành nhiều sẽ giúp bạn tạo ra các trang web tương tác và động!
    `.trim(),
  },
  {
    id: "javascript-async",
    title: "Async/Await và Promises Trong JavaScript",
    description: "Tìm hiểu cách xử lý bất đồng bộ trong JavaScript với Promises, async/await và các pattern phổ biến.",
    date: "2024-12-21",
    category: "JavaScript",
    content: `
# Async/Await và Promises Trong JavaScript

JavaScript là ngôn ngữ single-threaded, nhưng với async programming, chúng ta có thể xử lý các tác vụ không đồng bộ một cách hiệu quả.

## Callbacks (Cách Cũ)

\`\`\`javascript
// Callback hell
setTimeout(() => {
    console.log("Bước 1");
    setTimeout(() => {
        console.log("Bước 2");
        setTimeout(() => {
            console.log("Bước 3");
        }, 1000);
    }, 1000);
}, 1000);
\`\`\`

## Promises

Promise đại diện cho một giá trị có thể có trong tương lai.

### Tạo Promise

\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    if (success) {
        resolve("Thành công!");
    } else {
        reject("Thất bại!");
    }
});
\`\`\`

### Sử Dụng Promise

\`\`\`javascript
myPromise
    .then((result) => {
        console.log(result); // "Thành công!"
    })
    .catch((error) => {
        console.error(error); // "Thất bại!"
    })
    .finally(() => {
        console.log("Luôn chạy");
    });
\`\`\`

### Promise Chaining

\`\`\`javascript
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return fetch("https://api.example.com/more-data");
    })
    .then(response => response.json())
    .then(moreData => console.log(moreData))
    .catch(error => console.error("Lỗi:", error));
\`\`\`

### Promise.all()

\`\`\`javascript
const promise1 = fetch("/api/data1");
const promise2 = fetch("/api/data2");
const promise3 = fetch("/api/data3");

Promise.all([promise1, promise2, promise3])
    .then(responses => {
        // Tất cả promises đã resolve
        return Promise.all(responses.map(r => r.json()));
    })
    .then(data => {
        console.log("Tất cả dữ liệu:", data);
    })
    .catch(error => {
        // Nếu một promise reject, tất cả sẽ reject
        console.error("Lỗi:", error);
    });
\`\`\`

## Async/Await (Cách Mới)

Async/await làm cho code bất đồng bộ trông giống code đồng bộ.

### Cú Pháp Cơ Bản

\`\`\`javascript
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Lỗi:", error);
        throw error;
    }
}
\`\`\`

### Xử Lý Nhiều Promises

\`\`\`javascript
async function fetchMultipleData() {
    try {
        const [data1, data2, data3] = await Promise.all([
            fetch("/api/data1").then(r => r.json()),
            fetch("/api/data2").then(r => r.json()),
            fetch("/api/data3").then(r => r.json())
        ]);
        
        console.log("Tất cả dữ liệu:", { data1, data2, data3 });
    } catch (error) {
        console.error("Lỗi:", error);
    }
}
\`\`\`

### Promise.allSettled()

\`\`\`javascript
async function fetchAllSettled() {
    const promises = [
        fetch("/api/data1"),
        fetch("/api/data2"),
        fetch("/api/data3")
    ];
    
    const results = await Promise.allSettled(promises);
    
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(\`Promise \${index} thành công:\`, result.value);
        } else {
            console.log(\`Promise \${index} thất bại:\`, result.reason);
        }
    });
}
\`\`\`

## Ví Dụ Thực Tế

\`\`\`javascript
// Fetch API với error handling
async function getUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error("Lỗi lấy dữ liệu user:", error);
        return null;
    }
}

// Sử dụng
const user = await getUserData(123);
if (user) {
    console.log("User:", user);
}
\`\`\`

## Best Practices

1. **Luôn sử dụng try-catch** với async/await
2. **Sử dụng Promise.all()** khi cần chạy song song
3. **Tránh await trong vòng lặp**: Sử dụng Promise.all() thay thế
4. **Error handling**: Luôn xử lý lỗi một cách rõ ràng

## Kết Luận

Async/await và Promises là công cụ mạnh mẽ để xử lý bất đồng bộ trong JavaScript. Nắm vững chúng sẽ giúp bạn viết code sạch và dễ đọc hơn!
    `.trim(),
  },
  {
    id: "javascript-es6",
    title: "ES6+ Features - Những Tính Năng Hiện Đại Của JavaScript",
    description: "Khám phá các tính năng mới của ES6+: Destructuring, Spread Operator, Template Literals, Arrow Functions và nhiều hơn nữa.",
    date: "2024-12-22",
    category: "JavaScript",
    content: `
# ES6+ Features - Những Tính Năng Hiện Đại Của JavaScript

ES6 (ECMAScript 2015) và các phiên bản sau đã mang đến nhiều tính năng mới giúp JavaScript hiện đại và mạnh mẽ hơn.

## Let và Const

\`\`\`javascript
// let - block scope, có thể thay đổi
let name = "Phát";
if (true) {
    let name = "Bá Phát";
    console.log(name); // "Bá Phát"
}
console.log(name); // "Phát"

// const - block scope, không thể thay đổi
const PI = 3.14159;
// PI = 3.14; // Lỗi!
\`\`\`

## Template Literals

\`\`\`javascript
const name = "Lê Bá Phát";
const age = 25;

// Thay vì: "Xin chào, " + name + ", bạn " + age + " tuổi"
const greeting = \`Xin chào, \${name}, bạn \${age} tuổi\`;

// Multi-line strings
const message = \`
    Dòng 1
    Dòng 2
    Dòng 3
\`;
\`\`\`

## Arrow Functions

\`\`\`javascript
// Function thông thường
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Không có tham số
const greet = () => "Hello";

// Một tham số (không cần ngoặc)
const square = x => x * x;

// Nhiều dòng
const process = (data) => {
    const result = data.map(item => item * 2);
    return result.filter(item => item > 10);
};
\`\`\`

## Destructuring

### Array Destructuring

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// Cơ bản
const [first, second] = numbers;
console.log(first, second); // 1, 2

// Bỏ qua phần tử
const [a, , c] = numbers;
console.log(a, c); // 1, 3

// Rest operator
const [first, ...rest] = numbers;
console.log(rest); // [2, 3, 4, 5]

// Default values
const [x = 0, y = 0] = [];
\`\`\`

### Object Destructuring

\`\`\`javascript
const person = {
    name: "Lê Bá Phát",
    age: 25,
    city: "Hà Nội"
};

// Cơ bản
const { name, age } = person;
console.log(name, age); // "Lê Bá Phát", 25

// Rename
const { name: fullName, age: tuoi } = person;

// Default values
const { name, email = "no-email@example.com" } = person;

// Rest operator
const { name, ...rest } = person;
\`\`\`

## Spread Operator

\`\`\`javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const updated = { ...obj1, b: 99 }; // { a: 1, b: 99 }
\`\`\`

## Default Parameters

\`\`\`javascript
function greet(name = "Khách", greeting = "Xin chào") {
    return \`\${greeting}, \${name}!\`;
}

greet(); // "Xin chào, Khách!"
greet("Phát"); // "Xin chào, Phát!"
greet("Phát", "Chào"); // "Chào, Phát!"
\`\`\`

## Rest Parameters

\`\`\`javascript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

sum(1, 2, 3, 4, 5); // 15
sum(10, 20); // 30
\`\`\`

## Enhanced Object Literals

\`\`\`javascript
const name = "Phát";
const age = 25;

// Shorthand property
const person = { name, age };

// Shorthand method
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

// Computed property names
const key = "dynamicKey";
const obj = {
    [key]: "value",
    [\`prefix_\${key}\`]: "another value"
};
\`\`\`

## Modules (ES6)

\`\`\`javascript
// export.js
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}
export default class Calculator {
    // ...
}

// import.js
import Calculator, { PI, add } from "./export.js";
\`\`\`

## Kết Luận

ES6+ đã làm cho JavaScript hiện đại và dễ sử dụng hơn rất nhiều. Nắm vững các tính năng này sẽ giúp bạn viết code sạch và hiệu quả hơn!
    `.trim(),
  },
  {
    id: "javascript-fetch-api",
    title: "Fetch API - Giao Tiếp Với Server Trong JavaScript",
    description: "Học cách sử dụng Fetch API để gửi HTTP requests, xử lý responses và làm việc với REST APIs.",
    date: "2024-12-23",
    category: "JavaScript",
    content: `
# Fetch API - Giao Tiếp Với Server Trong JavaScript

Fetch API là cách hiện đại để thực hiện HTTP requests trong JavaScript, thay thế cho XMLHttpRequest cũ.

## Fetch Cơ Bản

\`\`\`javascript
// GET request
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Lỗi:", error));
\`\`\`

## Các Phương Thức HTTP

### GET Request

\`\`\`javascript
async function getData() {
    try {
        const response = await fetch("https://api.example.com/users");
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Lỗi:", error);
    }
}
\`\`\`

### POST Request

\`\`\`javascript
async function createUser(userData) {
    try {
        const response = await fetch("https://api.example.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const newUser = await response.json();
        return newUser;
    } catch (error) {
        console.error("Lỗi:", error);
    }
}

// Sử dụng
const user = {
    name: "Lê Bá Phát",
    email: "phat@example.com"
};
createUser(user);
\`\`\`

### PUT Request

\`\`\`javascript
async function updateUser(userId, userData) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${userId}\`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        });
        
        const updatedUser = await response.json();
        return updatedUser;
    } catch (error) {
        console.error("Lỗi:", error);
    }
}
\`\`\`

### DELETE Request

\`\`\`javascript
async function deleteUser(userId) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${userId}\`, {
            method: "DELETE"
        });
        
        if (response.ok) {
            console.log("Đã xóa user thành công");
        }
    } catch (error) {
        console.error("Lỗi:", error);
    }
}
\`\`\`

## Headers và Options

\`\`\`javascript
fetch("https://api.example.com/data", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer token123",
        "X-Custom-Header": "custom-value"
    },
    body: JSON.stringify({ key: "value" }),
    mode: "cors", // cors, no-cors, same-origin
    cache: "no-cache", // default, no-cache, reload, force-cache
    credentials: "include" // include, same-origin, omit
});
\`\`\`

## Xử Lý Response

\`\`\`javascript
async function handleResponse() {
    const response = await fetch("https://api.example.com/data");
    
    // Kiểm tra status
    console.log(response.status); // 200
    console.log(response.statusText); // "OK"
    console.log(response.ok); // true nếu status 200-299
    
    // Headers
    console.log(response.headers.get("Content-Type"));
    
    // Các phương thức parse
    const text = await response.text();
    const json = await response.json();
    const blob = await response.blob();
    const arrayBuffer = await response.arrayBuffer();
    
    return json;
}
\`\`\`

## Error Handling

\`\`\`javascript
async function fetchWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            // Xử lý các lỗi HTTP
            if (response.status === 404) {
                throw new Error("Không tìm thấy resource");
            } else if (response.status === 500) {
                throw new Error("Lỗi server");
            } else {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        // Xử lý lỗi network hoặc parse
        if (error instanceof TypeError) {
            console.error("Lỗi network:", error);
        } else {
            console.error("Lỗi khác:", error);
        }
        throw error;
    }
}
\`\`\`

## Ví Dụ Thực Tế

\`\`\`javascript
// API service class
class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    
    async request(endpoint, options = {}) {
        const url = \`\${this.baseURL}\${endpoint}\`;
        const config = {
            headers: {
                "Content-Type": "application/json",
                ...options.headers
            },
            ...options
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(\`API Error: \${response.status}\`);
            }
            
            return await response.json();
        } catch (error) {
            console.error("API Request failed:", error);
            throw error;
        }
    }
    
    get(endpoint) {
        return this.request(endpoint, { method: "GET" });
    }
    
    post(endpoint, data) {
        return this.request(endpoint, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    
    put(endpoint, data) {
        return this.request(endpoint, {
            method: "PUT",
            body: JSON.stringify(data)
        });
    }
    
    delete(endpoint) {
        return this.request(endpoint, { method: "DELETE" });
    }
}

// Sử dụng
const api = new ApiService("https://api.example.com");
const users = await api.get("/users");
const newUser = await api.post("/users", { name: "Phát", email: "phat@example.com" });
\`\`\`

## Best Practices

1. **Luôn kiểm tra response.ok**: Đảm bảo request thành công
2. **Error handling**: Xử lý cả network errors và HTTP errors
3. **Headers**: Luôn set Content-Type cho POST/PUT requests
4. **AbortController**: Sử dụng để cancel requests khi cần
5. **Timeout**: Implement timeout cho requests

## Kết Luận

Fetch API là công cụ mạnh mẽ để giao tiếp với server. Nắm vững Fetch API sẽ giúp bạn xây dựng các ứng dụng web hiện đại và tương tác!
    `.trim(),
  },
]

