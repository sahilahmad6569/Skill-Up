// DB Name: skill_up

// Collections:
// course_contents
// courses
// users


// Query for course_contents:

db.course_contents.insertMany(
    [
        {
          _id: 'CC-course_c',
          course: 'course_c',
          topics: [ 'Variables', 'Loops', 'Conditionals' ],
          videos: [
            {
              title: 'Variables, Operators, and Input/Output in C',
              url: 'https://youtu.be/rQoqCP7LX60?feature=shared'
            },
            {
              title: 'Understanding Conditional Statements in C',
              url: 'https://youtu.be/7PSfRdeY5qE?feature=shared'
            },
            {
              title: 'Mastering Loops in C Programming',
              url: 'https://youtu.be/wYvrBXUfFfw?feature=shared'
            },
            {
              title: 'Pattern Printing Techniques in C',
              url: 'https://youtu.be/clIcH1ALHMw?feature=shared'
            },
            {
              title: 'Functions and Pointers: Core Concepts in C',
              url: 'https://youtu.be/mIY3QVktHU8?feature=shared'
            },
            {
              title: 'Recursion Explained: Basics and Applications in C',
              url: 'https://youtu.be/Bd-1YM8taBc?feature=shared'
            },
            {
              title: 'Introduction to Arrays in C',
              url: 'https://youtu.be/aWKJ5lRgI3U?feature=shared'
            },
            {
              title: 'Working with 2D Arrays in C',
              url: 'https://youtu.be/sEiMDFdbPGo?feature=shared'
            },
            {
              title: 'Strings in C: Basics and Operations',
              url: 'https://youtu.be/8qKp63Ox3vQ?feature=shared'
            },
            {
              title: 'Structures in C: A Comprehensive Guide',
              url: 'https://youtu.be/nDmULDo8D18?feature=shared'
            },
            {
              title: 'Sorting in C with Time and Space Complexity Analysis',
              url: 'https://youtu.be/9s1_FWWxvlg?feature=shared'
            },
            {
              title: 'File Handling in C: Reading and Writing Files',
              url: 'https://youtu.be/4DljBbiC2p4?feature=shared'
            }
          ],
          assignments: [
            {
              title: 'Basics of C Programming',
              questions: [
                'Write a C program to print "Hello, World!" to the screen.',
                'Write a C program to take two numbers as input and display their sum.',
                'Write a C program to find the largest of three numbers using `if-else` statements.',
                'Write a C program to calculate the factorial of a number using a `for` loop.',
                'Write a C program to check whether a given number is a prime number.'
              ]
            },
            {
              title: 'Arrays and Functions',
              questions: [
                'Write a C program to find the average of `n` numbers using arrays.',
                'Write a C program to reverse an array of integers.',
                'Write a C program to sort an array of integers in ascending order using the Bubble Sort algorithm.',
                'Write a C program that uses a function to calculate the sum of all elements in an array.',
                'Write a C program to find the second largest number in an array.'
              ]
            },
            {
              title: 'Pointers and Memory Management',
              questions: [
                'Write a C program to demonstrate the use of pointers by swapping two numbers.',
                'Write a C program that uses pointers to find the length of a string.',
                'Write a C program to dynamically allocate memory for an array and fill it with values.',
                'Write a C program to create a function that uses a pointer to modify the value of a variable.',
                'Write a C program to free dynamically allocated memory and handle memory leaks.'
              ]
            },
            {
              title: 'Structures and File Handling',
              questions: [
                'Write a C program to define a structure to store student information (name, roll number, marks) and display it.',
                'Write a C program to read and write data from/to a text file.',
                'Write a C program that stores a list of books (name, author, and price) in a structure and displays the information.',
                'Write a C program to append data to an existing file.',
                'Write a C program to search for a specific record in a file using structure and display the result.'
              ]
            },
            {
              title: 'Advanced Topics - Recursion and Linked Lists',
              questions: [
                'Write a C program to calculate the factorial of a number using recursion.',
                'Write a C program to find the Fibonacci series up to `n` terms using recursion.',
                'Write a C program to create a singly linked list and display its elements.',
                'Write a C program to insert a node at the beginning of a linked list.',
                'Write a C program to reverse a singly linked list.'
              ]
            }
          ],
          programInfo: {
            name: 'Bachelor of Computer Application',
            semester: 1,
            totalCourses: 6,
            faculty: 'Dr. John Doe',
            duration: '3 years'
          },
          quizzes: [
            {
              title: 'Basics of C Programming',
              noOfQuestions: 5,
              questions: [
                {
                  question: 'Which of the following is the correct syntax to include a user-defined header file in C?',
                  options: [
                    '#include "filename.h"',
                    '#include <filename.h>',
                    '#include <user/filename.h>',
                    '#include <stdio.h>'
                  ],
                  answer: '#include "filename.h"'
                },
                {
                  question: 'Which of the following is not a valid C variable name?',
                  options: [ 'int_var', '2ndVar', '_temp', 'VAR_NAME' ],
                  answer: '2ndVar'
                },
                {
                  question: 'What is the output of the following code?\n' +
                    '```c\n' +
                    'int x = 5;\n' +
                    'printf("%d", x++);\n' +
                    '```',
                  options: [ '5', '6', 'Compilation error', 'Undefined behavior' ],
                  answer: '5'
                },
                {
                  question: 'Which keyword is used to prevent a variable from being modified in C?',
                  options: [ 'static', 'const', 'volatile', 'register' ],
                  answer: 'const'
                },
                {
                  question: 'What does the `sizeof()` operator return in C?',
                  options: [
                    'The size of the variable in bits',
                    'The size of the variable in bytes',
                    'The length of the variable',
                    'None of the above'
                  ],
                  answer: 'The size of the variable in bytes'
                }
              ]
            },
            {
              title: 'Control Structures and Loops',
              noOfQuestions: 5,
              questions: [
                {
                  question: 'What is the output of the following code snippet?\n' +
                    '```c\n' +
                    'int x = 10;\n' +
                    'if (x > 5)\n' +
                    '    printf("Greater");\n' +
                    'else\n' +
                    '    printf("Smaller");\n' +
                    '```',
                  options: [ 'Greater', 'Smaller', 'Error', 'None of the above' ],
                  answer: 'Greater'
                },
                {
                  question: 'Which loop is guaranteed to execute at least once in C?',
                  options: [ 'for', 'while', 'do-while', 'None of the above' ],
                  answer: 'do-while'
                },
                {
                  question: 'Which of the following is not a valid loop structure in C?',
                  options: [ 'for', 'foreach', 'while', 'do-while' ],
                  answer: 'foreach'
                },
                {
                  question: 'What will be the value of `x` after the loop executes?\n' +
                    '```c\n' +
                    'int x = 0;\n' +
                    'for (int i = 0; i < 5; i++) {\n' +
                    '    x += i;\n' +
                    '}\n' +
                    '```',
                  options: [ '10', '15', '20', '25' ],
                  answer: '10'
                },
                {
                  question: 'What keyword is used to terminate a loop in C?',
                  options: [ 'exit', 'return', 'break', 'continue' ],
                  answer: 'break'
                }
              ]
            },
            {
              title: 'Functions in C',
              noOfQuestions: 5,
              questions: [
                {
                  question: 'What is the default return type of a function in C if no return type is specified?',
                  options: [ 'void', 'int', 'char', 'float' ],
                  answer: 'int'
                },
                {
                  question: 'Which of the following is not a valid storage class in C?',
                  options: [ 'auto', 'static', 'private', 'extern' ],
                  answer: 'private'
                },
                {
                  question: 'How can a function return multiple values in C?',
                  options: [
                    'Using pointers',
                    'Using global variables',
                    'Using structures',
                    'All of the above'
                  ],
                  answer: 'All of the above'
                },
                {
                  question: 'Which of the following is a correct syntax for declaring a function?',
                  options: [
                    'functionName(int, float)',
                    'int functionName(int, float);',
                    'functionName(int x, float y);',
                    'int functionName x, y;'
                  ],
                  answer: 'int functionName(int, float);'
                },
                {
                  question: 'Which header file is required for using the `printf()` and `scanf()` functions?',
                  options: [ '<stdlib.h>', '<conio.h>', '<stdio.h>', '<math.h>' ],
                  answer: '<stdio.h>'
                }
              ]
            },
            {
              title: 'Arrays and Strings in C',
              noOfQuestions: 5,
              questions: [
                {
                  question: 'How are elements stored in a two-dimensional array?',
                  options: [
                    'Column-major order',
                    'Row-major order',
                    'Random order',
                    'None of the above'
                  ],
                  answer: 'Row-major order'
                },
                {
                  question: 'What will be the output of the following code?\n' +
                    '```c\n' +
                    'char str[] = "Hello";\n' +
                    'printf("%lu", sizeof(str));\n' +
                    '```',
                  options: [ '5', '6', '4', 'Undefined' ],
                  answer: '6'
                },
                {
                  question: 'What is the index of the first element in a C array?',
                  options: [ '0', '1', '-1', 'None of the above' ],
                  answer: '0'
                },
                {
                  question: 'Which function is used to find the length of a string in C?',
                  options: [ 'strlen()', 'sizeof()', 'strcpy()', 'strcmp()' ],
                  answer: 'strlen()'
                },
                {
                  question: 'Which operator is used to access the elements of an array?',
                  options: [ '.', '->', '[]', '()' ],
                  answer: '[]'
                }
              ]
            },
            {
              title: 'Pointers in C',
              noOfQuestions: 5,
              questions: [
                {
                  question: 'What does the `*` operator do in C when used with a pointer?',
                  options: [
                    'Multiplies two numbers',
                    'Declares a pointer',
                    'Dereferences a pointer',
                    'None of the above'
                  ],
                  answer: 'Dereferences a pointer'
                },
                {
                  question: 'What will be the output of the following code?\n' +
                    '```c\n' +
                    'int a = 10;\n' +
                    'int *p = &a;\n' +
                    'printf("%d", *p);\n' +
                    '```',
                  options: [
                    'Memory address of `a`',
                    '10',
                    'Garbage value',
                    'Compilation error'
                  ],
                  answer: '10'
                },
                {
                  question: 'Which of the following is not a valid pointer type?',
                  options: [
                    'void pointer',
                    'double pointer',
                    'int pointer',
                    'None of the above'
                  ],
                  answer: 'None of the above'
                },
                {
                  question: 'What is a null pointer in C?',
                  options: [
                    'A pointer pointing to 0',
                    'A pointer pointing to memory address 1',
                    'A pointer pointing to NULL keyword',
                    'None of the above'
                  ],
                  answer: 'A pointer pointing to 0'
                },
                {
                  question: 'Which of the following correctly declares a pointer to an integer?',
                  options: [ 'int *p;', '*int p;', 'int p*;', 'None of the above' ],
                  answer: 'int *p;'
                }
              ]
            }
          ],
          programs: [
            {
              title: 'Hello, World Program',
              description: "This program prints 'Hello, World!' to the console, demonstrating the basic syntax of C programming.",
              code: '#include <stdio.h>\n' +
                '\n' +
                'int main() {\n' +
                '    printf("Hello, World!\\n");\n' +
                '    return 0;\n' +
                '}',
              language: 'c'
            },
            {
              title: 'Fibonacci Series Generator',
              description: 'This program generates and displays the Fibonacci series up to a given number.',
              code: '#include <stdio.h>\n' +
                '\n' +
                'int main() {\n' +
                '    int n, t1 = 0, t2 = 1, nextTerm;\n' +
                '    printf("Enter the number of terms: ");\n' +
                '    scanf("%d", &n);\n' +
                '    \n' +
                '    printf("Fibonacci Series: ");\n' +
                '    for (int i = 1; i <= n; ++i) {\n' +
                '        printf("%d ", t1);\n' +
                '        nextTerm = t1 + t2;\n' +
                '        t1 = t2;\n' +
                '        t2 = nextTerm;\n' +
                '    }\n' +
                '    return 0;\n' +
                '}',
              language: 'c'
            },
            {
              title: 'Prime Number Checker',
              description: 'This program checks if a given number is prime.',
              code: '#include <stdio.h>\n' +
                '#include <stdbool.h>\n' +
                '\n' +
                'bool isPrime(int num) {\n' +
                '    if (num <= 1) return false;\n' +
                '    for (int i = 2; i <= num / 2; ++i) {\n' +
                '        if (num % i == 0) return false;\n' +
                '    }\n' +
                '    return true;\n' +
                '}\n' +
                '\n' +
                'int main() {\n' +
                '    int n;\n' +
                '    printf("Enter a number: ");\n' +
                '    scanf("%d", &n);\n' +
                '    \n' +
                '    if (isPrime(n))\n' +
                '        printf("%d is a prime number.\\n", n);\n' +
                '    else\n' +
                '        printf("%d is not a prime number.\\n", n);\n' +
                '    \n' +
                '    return 0;\n' +
                '}',
              language: 'c'
            },
            {
              title: 'Factorial Calculation',
              description: 'This program calculates the factorial of a number using recursion.',
              code: '#include <stdio.h>\n' +
                '\n' +
                'int factorial(int n) {\n' +
                '    if (n == 0 || n == 1) return 1;\n' +
                '    return n * factorial(n - 1);\n' +
                '}\n' +
                '\n' +
                'int main() {\n' +
                '    int n;\n' +
                '    printf("Enter a number: ");\n' +
                '    scanf("%d", &n);\n' +
                '    \n' +
                '    printf("Factorial of %d is %d\\n", n, factorial(n));\n' +
                '    return 0;\n' +
                '}',
              language: 'c'
            },
            {
              title: 'Palindrome Checker',
              description: 'This program checks if a given number is a palindrome.',
              code: '#include <stdio.h>\n' +
                '\n' +
                'int main() {\n' +
                '    int num, reversed = 0, original, remainder;\n' +
                '    printf("Enter a number: ");\n' +
                '    scanf("%d", &num);\n' +
                '    original = num;\n' +
                '    \n' +
                '    while (num != 0) {\n' +
                '        remainder = num % 10;\n' +
                '        reversed = reversed * 10 + remainder;\n' +
                '        num /= 10;\n' +
                '    }\n' +
                '    \n' +
                '    if (original == reversed)\n' +
                '        printf("%d is a palindrome.\\n", original);\n' +
                '    else\n' +
                '        printf("%d is not a palindrome.\\n", original);\n' +
                '    \n' +
                '    return 0;\n' +
                '}',
              language: 'c'
            },
            {
              title: 'Bubble Sort',
              description: 'This program sorts an array of integers using the Bubble Sort algorithm.',
              code: '#include <stdio.h>\n' +
                '\n' +
                'void bubbleSort(int arr[], int n) {\n' +
                '    for (int i = 0; i < n - 1; i++) {\n' +
                '        for (int j = 0; j < n - i - 1; j++) {\n' +
                '            if (arr[j] > arr[j + 1]) {\n' +
                '                int temp = arr[j];\n' +
                '                arr[j] = arr[j + 1];\n' +
                '                arr[j + 1] = temp;\n' +
                '            }\n' +
                '        }\n' +
                '    }\n' +
                '}\n' +
                '\n' +
                'int main() {\n' +
                '    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n' +
                '    int n = sizeof(arr) / sizeof(arr[0]);\n' +
                '    \n' +
                '    bubbleSort(arr, n);\n' +
                '    \n' +
                '    printf("Sorted array: ");\n' +
                '    for (int i = 0; i < n; i++) {\n' +
                '        printf("%d ", arr[i]);\n' +
                '    }\n' +
                '    return 0;\n' +
                '}',
              language: 'c'
            },
            {
              title: 'Matrix Multiplication',
              description: 'This program multiplies two matrices of compatible dimensions.',
              code: '#include <stdio.h>\n' +
                '\n' +
                'int main() {\n' +
                '    int a[2][2] = {{1, 2}, {3, 4}};\n' +
                '    int b[2][2] = {{5, 6}, {7, 8}};\n' +
                '    int c[2][2] = {0};\n' +
                '    \n' +
                '    for (int i = 0; i < 2; i++) {\n' +
                '        for (int j = 0; j < 2; j++) {\n' +
                '            for (int k = 0; k < 2; k++) {\n' +
                '                c[i][j] += a[i][k] * b[k][j];\n' +
                '            }\n' +
                '        }\n' +
                '    }\n' +
                '    \n' +
                '    printf("Resultant Matrix:\\n");\n' +
                '    for (int i = 0; i < 2; i++) {\n' +
                '        for (int j = 0; j < 2; j++) {\n' +
                '            printf("%d ", c[i][j]);\n' +
                '        }\n' +
                '        printf("\\n");\n' +
                '    }\n' +
                '    return 0;\n' +
                '}',
              language: 'c'
            },
            {
              title: 'Simple Calculator',
              description: 'This program performs basic arithmetic operations using a switch-case structure.',
              code: '#include <stdio.h>\n' +
                '\n' +
                'int main() {\n' +
                '    char operator;\n' +
                '    double num1, num2;\n' +
                '    printf("Enter an operator (+, -, *, /): ");\n' +
                '    scanf("%c", &operator);\n' +
                '    printf("Enter two operands: ");\n' +
                '    scanf("%lf %lf", &num1, &num2);\n' +
                '    \n' +
                '    switch (operator) {\n' +
                `        case '+': printf("%.2lf + %.2lf = %.2lf\\n", num1, num2, num1 + num2); break;\n` +
                `        case '-': printf("%.2lf - %.2lf = %.2lf\\n", num1, num2, num1 - num2); break;\n` +
                `        case '*': printf("%.2lf * %.2lf = %.2lf\\n", num1, num2, num1 * num2); break;\n` +
                "        case '/': \n" +
                '            if (num2 != 0)\n' +
                '                printf("%.2lf / %.2lf = %.2lf\\n", num1, num2, num1 / num2);\n' +
                '            else\n' +
                '                printf("Division by zero error!\\n");\n' +
                '            break;\n' +
                '        default: printf("Invalid operator!\\n");\n' +
                '    }\n' +
                '    return 0;\n' +
                '}',
              language: 'c'
            },
            {
              title: 'Find Largest Element in Array',
              description: 'This program finds the largest element in an array.',
              code: '#include <stdio.h>\n' +
                '\n' +
                'int main() {\n' +
                '    int arr[] = {12, 45, 67, 23, 89, 34};\n' +
                '    int n = sizeof(arr) / sizeof(arr[0]);\n' +
                '    int max = arr[0];\n' +
                '    \n' +
                '    for (int i = 1; i < n; i++) {\n' +
                '        if (arr[i] > max)\n' +
                '            max = arr[i];\n' +
                '    }\n' +
                '    \n' +
                '    printf("The largest element is %d\\n", max);\n' +
                '    return 0;\n' +
                '}',
              language: 'c'
            },
            {
              title: 'File Handling',
              description: 'This program writes to and reads from a file in C.',
              code: '#include <stdio.h>\n' +
                '\n' +
                'int main() {\n' +
                '    FILE *fptr;\n' +
                '    char filename[] = "example.txt";\n' +
                '    char data[] = "Hello, this is a file handling example.";\n' +
                '    \n' +
                '    // Writing to file\n' +
                '    fptr = fopen(filename, "w");\n' +
                '    if (fptr == NULL) {\n' +
                '        printf("Error opening file!\\n");\n' +
                '        return 1;\n' +
                '    }\n' +
                '    fprintf(fptr, "%s", data);\n' +
                '    fclose(fptr);\n' +
                '    \n' +
                '    // Reading from file\n' +
                '    fptr = fopen(filename, "r");\n' +
                '    if (fptr == NULL) {\n' +
                '        printf("Error opening file!\\n");\n' +
                '        return 1;\n' +
                '    }\n' +
                '    char ch;\n' +
                '    printf("File content:\\n");\n' +
                '    while ((ch = fgetc(fptr)) != EOF) {\n' +
                '        putchar(ch);\n' +
                '    }\n' +
                '    fclose(fptr);\n' +
                '    return 0;\n' +
                '}',
              language: 'c'
            }
          ],
          syllabus: [
            {
              title: 'Week 1: Introduction to C Programming',
              topics: [
                'Overview of Programming Languages',
                'History and Features of C',
                'Setting up the Environment (Compilers, IDEs, etc.)',
                'Structure of a C Program',
                'Writing and Executing Your First C Program',
                'Basic Syntax: Keywords, Identifiers, and Comments'
              ]
            },
            {
              title: 'Week 2: Data Types, Variables, and Operators',
              topics: [
                'Variables and Constants',
                'Basic Data Types: int, float, char, double',
                'Type Modifiers: short, long, signed, unsigned',
                'Arithmetic, Relational, Logical, and Bitwise Operators',
                'Assignment and Conditional Operators',
                'Type Casting'
              ]
            },
            {
              title: 'Week 3: Input/Output and Control Statements',
              topics: [
                'Input/Output Functions: printf and scanf',
                'Control Flow: if, else, else if',
                'switch Statements',
                'Loops: for, while, do-while',
                'Break and Continue Statements'
              ]
            },
            {
              title: 'Week 4: Functions and Arrays',
              topics: [
                'Defining and Calling Functions',
                'Function Prototypes',
                'Return Types and Passing Arguments (Pass by Value)',
                'Arrays: Introduction and Syntax',
                'One-Dimensional Arrays',
                'Multidimensional Arrays'
              ]
            },
            {
              title: 'Week 5: Strings and Pointers',
              topics: [
                'Strings in C: Declaration, Initialization, and Functions (strlen, strcpy, strcmp, etc.)',
                'Basics of Pointers',
                'Pointer Arithmetic',
                'Pointers with Arrays and Strings',
                'Pointers to Functions'
              ]
            },
            {
              title: 'Week 6: Dynamic Memory Allocation and Structures',
              topics: [
                'Memory Allocation: malloc, calloc, realloc, and free',
                'Structures: Defining and Using Structures',
                'Array of Structures',
                'Nested Structures',
                'Union and Enum'
              ]
            },
            {
              title: 'Week 7: File Handling',
              topics: [
                'File I/O: Opening, Reading, Writing, and Closing Files',
                'Modes of File Handling: r, w, a, etc.',
                'Working with fscanf and fprintf',
                'Random Access in Files: fseek, ftell, rewind',
                'Error Handling in File Operations'
              ]
            },
            {
              title: 'Week 8: Advanced Topics and Best Practices',
              topics: [
                'Preprocessor Directives: #define, #include, #ifdef, #ifndef',
                'Command-Line Arguments',
                'Recursion in C',
                'Debugging Techniques and Tools',
                'Writing Modular Code and Libraries',
                'Best Practices in C Programming'
              ]
            }
          ],
          overview: {
            course_description: 'The CA103: C Programming Lab is a practical course that focuses on hands-on learning of the C programming language. It aims to build a strong foundation in programming by covering essential topics like variables, control structures, functions, arrays, and file handling. This course is designed to equip students with the necessary skills to write efficient and optimized programs, which are fundamental in the field of computer science and software development.',
            learning_outcomes: [
              'Develop a solid understanding of C programming language syntax and semantics.',
              'Learn to write efficient algorithms and solve real-world problems using C.',
              'Understand the importance of debugging, error handling, and optimizing code.',
              'Enhance problem-solving skills through structured programming tasks.',
              "Familiarize with C's memory management, pointers, and dynamic memory allocation.",
              'Gain hands-on experience with file handling and basic data structures.'
            ],
            key_topics_covered: [
              'Introduction to C Programming: Overview of C language, IDE setup, basic syntax, and structure.',
              'Data Types and Operators: Understanding primitive data types, operators, and expressions.',
              'Control Structures: If-else, switch-case, and looping structures (for, while, do-while).',
              'Functions: Function declaration, definition, and calling conventions, recursion.',
              'Arrays: One-dimensional and two-dimensional arrays, array manipulation.',
              'Pointers: Introduction to pointers, pointer arithmetic, dynamic memory allocation.',
              'File Handling: Reading from and writing to files, file operations in C.',
              'Structures and Unions: Understanding structures, unions, and their applications.',
              'Sorting and Searching Algorithms: Implementing basic sorting and searching techniques in C.'
            ],
            lab_sessions: [
              'Practical exercises for implementing the key concepts learned in theory.',
              'Hands-on tasks for building simple C programs that demonstrate core concepts.',
              'Debugging and optimizing existing C programs to enhance understanding.',
              'Collaboration and peer review during lab sessions to foster problem-solving skills.'
            ],
            assessment_method: [
              'Regular lab assignments to demonstrate coding skills and practical knowledge.',
              'Quizzes and tests to assess understanding of key programming concepts.',
              'Final project or capstone assignment to apply all learned concepts in a real-world scenario.',
              'Active participation in lab sessions and problem-solving tasks.'
            ],
            resources_and_tools: [
              'Text Editors: Visual Studio Code, Sublime Text, or any other C-friendly editor.',
              'Compilers: GCC (GNU Compiler Collection) for compiling C programs.',
              'Online Resources: Tutorials, forums, and documentation to support learning and problem-solving.'
            ]
          },
          notes: [
            {
              title: 'Complete C Programming Notes',
              url: 'https://drive.google.com/file/d/1nl3JH0z7GEQKh57jc9uO3NPUbTBK1SXc/preview'
            },
            {
              title: 'C Programming CheatSheet',
              url: 'https://drive.google.com/file/d/1KpXsp1IvUAt0pY5-EoO67ZxM6mssUifF/preview'
            }
          ],
          sections: [
            {
              title: 'Introduction to C Programming',
              content: 'C is a high-level, general-purpose programming language that has been widely used for system programming and developing embedded systems. It was developed in the early 1970s by Dennis Ritchie at Bell Labs. C provides low-level access to memory, making it an ideal language for system-level programming such as operating systems and compilers.'
            },
            {
              title: '1. Setting Up the Environment',
              content: 'To write and execute C programs, you need to set up a C programming environment. Install a Compiler: GCC (GNU Compiler Collection) is commonly used for compiling C programs. On Windows, you can use MinGW, while Linux and macOS typically have GCC pre-installed. Text Editor: You can use any text editor to write your C code, though IDEs like Code::Blocks and Sublime Text offer syntax highlighting and debugging features.'
            },
            {
              title: '2. Writing Your First Program in C',
              content: 'A simple "Hello, World!" program in C looks like this:\n' +
                '\n' +
                '#include <stdio.h>\n' +
                '\n' +
                'int main() {\n' +
                '    printf("Hello, World!\\n");\n' +
                '    return 0;\n' +
                '}\n' +
                '\n' +
                'Explanation:\n' +
                '\n' +
                '- `#include <stdio.h>`: Includes the standard input-output library.\n' +
                '- `int main()`: Entry point of the program.\n' +
                '- `printf()`: Outputs text to the console.\n' +
                '- `return 0`: Indicates successful execution.'
            },
            {
              title: '3. Variables and Data Types',
              content: 'C supports several basic data types: `int` (integer), `float` (floating-point), `double` (double-precision floating-point), and `char` (character). You can declare variables and assign values like so:\n' +
                '\n' +
                'int age = 25;\n' +
                'float weight = 70.5;\n' +
                "char grade = 'A';"
            },
            {
              title: '4. Operators in C',
              content: 'C provides various operators for performing operations on variables and values. Some commonly used operators include:\n' +
                '\n' +
                '- Arithmetic Operators: `+`, `-`, `*`, `/`, `%`\n' +
                '- Relational Operators: `==`, `!=`, `<`, `>`, `<=`, `>=`\n' +
                '- Logical Operators: `&&` (AND), `||` (OR), `!` (NOT)\n' +
                '\n' +
                'Example:\n' +
                '\n' +
                'int sum = 5 + 3; // Arithmetic addition'
            },
            {
              title: '5. Control Flow Statements',
              content: 'Control flow statements determine the flow of execution. C supports `if-else`, `switch-case`, `for`, `while`, and `do-while` loops. These allow you to make decisions and repeat code based on conditions.'
            },
            {
              title: '6. Functions',
              content: "A function is a block of code that performs a specific task. Functions are essential in breaking down complex problems into smaller, manageable tasks. Here's an example of a simple function:\n" +
                '\n' +
                'int add(int a, int b) {\n' +
                '    return a + b;\n' +
                '}'
            },
            {
              title: '7. Arrays',
              content: 'An array is a collection of similar data types stored in contiguous memory locations. You can store multiple values of the same type in an array. Example:\n' +
                '\n' +
                'int numbers[5] = {1, 2, 3, 4, 5};'
            },
            {
              title: '8. Pointers',
              content: 'Pointers are variables that store memory addresses of other variables. Pointers provide low-level memory management and allow more control over how data is stored and accessed.\n' +
                '\n' +
                'Example:\n' +
                '\n' +
                'int a = 10;\n' +
                'int *ptr = &a;\n' +
                '\n' +
                'Here, `ptr` stores the memory address of `a`.'
            },
            {
              title: '9. Dynamic Memory Allocation',
              content: 'Dynamic memory allocation allows for efficient memory management during runtime. C provides functions such as `malloc()`, `calloc()`, `realloc()`, and `free()` for allocating and freeing memory.'
            },
            {
              title: '10. Structures and Unions',
              content: 'Structures group different data types under a single name, while unions allow storing different types of data in the same memory location.\n' +
                '\n' +
                'Example of structure:\n' +
                '\n' +
                'struct Person {\n' +
                '    char name[50];\n' +
                '    int age;\n' +
                '};'
            }
          ],
          title: 'C Programming Language',
          books: [
            {
              title: 'The C Programming Language',
              author: 'Brian W. Kernighan and Dennis M. Ritchie'
            },
            {
              title: 'C Programming: A Modern Approach',
              author: 'K.N. King'
            },
            {
              title: 'Head First C: A Brain-Friendly Guide',
              author: 'David Griffiths and Dawn Griffiths'
            },
            { title: 'Programming in ANSI C', author: 'E. Balagurusamy' },
            { title: 'Let Us C', author: 'Yashavant Kanetkar' }
          ]
        }
      ]
);

// Query for courses:

db.courses.insertMany(
    [
        {
          _id: 'course_c',
          name: 'C',
          description: 'Learn C for foundational programming skills and system-level programming.'
        },
        {
          _id: 'course_cpp',
          name: 'C++',
          description: 'Dive into C++ for system-level programming and competitive coding.'
        },
        {
          _id: 'course_java',
          name: 'Java',
          description: 'Explore Java for building robust and scalable applications.'
        },
        {
          _id: 'course_python',
          name: 'Python',
          description: 'Learn Python programming for data science, web development, and more.'
        },
        {
          _id: 'course_javascript',
          name: 'JavaScript',
          description: 'Master JavaScript for front-end and back-end web development.'
        },
        {
          _id: 'course_php',
          name: 'PHP',
          description: 'Get started with PHP for server-side scripting and web development.'
        }
      ]
);


// Query for users:

db.users.insertMany(
    [
        {
          _id: ObjectId('67c0a0857e04e1bd64458b2f'),
          name: 'test',
          email: 'test@gmail.com',
          password: '$2a$10$v10sZvYE2ZAL.ZA58wzLfuyMk91CqqjDgAGH.DkzWapqbMNAV5CVO',
          __v: 0
        },
        {
          _id: ObjectId('67c0b0ca0521c48f7b2476a6'),
          name: 'John Doe',
          email: 'john@gmail.com',
          password: '$2a$10$7PvRlaFfvAVE.F/.2SZ6vuYz1ueJcBKa5xgbl0Pg9OLyTe0NclmHu',
          __v: 0
        }
      ]
);