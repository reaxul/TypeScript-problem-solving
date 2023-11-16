# basic-typescript-problem-solving
explore-basic-typescript-simple-assignment-reaxul created by GitHub Classroom
---

### Interview Questions:

#### 1. **Benefits of TypeScript:**
   - TypeScript brings static typing, catching errors during development.
   - Enhanced code readability and maintainability.
   - Improved tooling and autocompletion in modern IDEs.

#### 2. **Optional Chaining (?.) and Nullish Coalescing (??):**
   - **Optional Chaining (?.):** Safely access nested properties, avoiding "undefined" errors.
     ```typescript
     const city = user?.address?.city || 'Unknown City';
     ```

   - **Nullish Coalescing (??):** Provides a default value only if the value is `null` or `undefined`.
     ```typescript
     const username = inputUsername ?? 'Guest';
     ```

#### 3. **Handling Asynchronous Operations:**
   - Use `async/await` for cleaner asynchronous code.
   - Advantages include improved readability and error handling compared to callbacks or Promises.

#### 4. **TypeScript Enums:**
   - Enums allow creating named constant values for improved code clarity.
   ```typescript
   enum Days {
     Monday,
     Tuesday,
     // ...
   }
   ```

#### 5. **Type Guards:**
   - Type guards help narrow down the type of a variable.
   ```typescript
   function isString(value: any): value is string {
     return typeof value === 'string';
   }
   ```

#### 6. **Readonly Properties:**
   - Make properties immutable by using the `readonly` keyword.
   ```typescript
   interface Person {
     readonly name: string;
     age: number;
   }
   ```

#### 7. **Union Types:**
   - Combine multiple types into one.
   ```typescript
   type Result = string | number;
   const value: Result = 'Hello';
   ```