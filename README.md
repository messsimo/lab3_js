# Лабораторная работа №3. Анализ предметов и оружия с использованием классов в JavaScript

## Цель работы
Изучить основы работы с классами и объектами в JavaScript, а также научиться расширять функциональность классов с использованием наследования. Реализовать классы для представления предметов и оружия с соответствующими методами и свойствами.

## Условие

### Задание 1. Создание класса Item

1. **Создание класса Item:**
    - Создал класс `Item`, который представляет предмет в инвентаре. Этот класс включает следующие поля:
        - `name`: название предмета.
        - `weight`: вес предмета.
        - `rarity`: редкость предмета (common, uncommon, rare, legendary).
    - Реализовал методы:
        - `getInfo()`: возвращает строку с информацией о предмете.
        - `setWeight(newWeight)`: изменяет вес предмета.

    Пример использования:
    ```javascript
    const sword = new Item("Steel Sword", 3.5, "rare");
    console.log(sword.getInfo()); // выводит информацию о предмете
    sword.setWeight(4.0); // изменяет вес предмета
    ```

2. **Подготовка среды:**
    - Установил редактор кода VS Code.
    - Создал файл `main.js` для размещения кода JavaScript.
    - Ввел класс `Item`, готовый для дальнейшего использования и тестирования.

### Задание 2. Создание класса Weapon

1. **Создание класса Weapon:**
    - Создал класс `Weapon`, который расширяет класс `Item` и добавляет дополнительные поля:
        - `damage`: урон оружия.
        - `durability`: прочность оружия (от 0 до 100).
    - Реализовал методы:
        - `use()`: уменьшает прочность оружия на 10 (если прочность больше 0).
        - `repair()`: восстанавливает прочность до 100.

    Пример использования:
    ```javascript
    const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
    console.log(bow.getInfo()); // выводит информацию о оружии
    bow.use(); // уменьшает прочность
    console.log(bow.durability); // выводит текущую прочность
    bow.repair(); // восстанавливает прочность
    ```

2. **Подготовка среды:**
    - Внес изменения в файл `main.js`, добавив класс `Weapon`, который использует наследование от класса `Item`.
    - Реализовал методы `use()` и `repair()` для изменения прочности оружия.

### Задание 3. Тестирование классов

1. Для тестирования классов использовал следующие примеры:
    - Создал объект `sword` класса `Item` и проверил работу метода `getInfo()`, который выводит информацию о предмете.
    - Создал объект `bow` класса `Weapon` и протестировал методы `use()` и `repair()` для проверки изменения и восстановления прочности оружия.
    - Примерный вывод в консоль для проверки:
    ```javascript
    // Для объекта sword
    const sword = new Item("Steel Sword", 3.5, "rare");
    console.log(sword.getInfo()); // Steel Sword, Weight: 3.5kg, Rarity: rare

    // Для объекта bow
    const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
    console.log(bow.getInfo()); // Longbow, Weight: 2.0kg, Rarity: uncommon, Damage: 15, Durability: 100
    bow.use(); // Прочность уменьшена на 10
    console.log(bow.durability); // 90
    bow.repair(); // Прочность восстановлена до 100
    console.log(bow.durability); // 100
    ```

## Выводы
В ходе работы я научился:
- Создавать и использовать классы в JavaScript для представления объектов.
- Расширять функциональность классов с помощью наследования.
- Реализовывать методы для изменения свойств объектов и взаимодействия с ними.
- Работать с объектами и методами для эффективной работы с данными в приложении.
