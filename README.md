# Шаблон приложения ColdOS — Python

Заготовка приложения ColdOS на Python.

> ColdOS исполняет JavaScript. Python-код не запускается как есть:
> `cldcli build` конвертирует поддерживаемое подмножество в JS
> (парсер `prpython.js`).

## Создание проекта

```bash
cldcli init myapp --lang python
```

## Поддерживаемое подмножество

| Возможность | Пример |
|---|---|
| Точка входа | `def user_run_application_<id>():` |
| Переменные | `x = "строка"` / `flag = True` |
| f-строки | `f"текст {x}"` → `` `текст ${x}` `` |
| Многострочные строки | `"""..."""` |
| Словари | `{"key": value}` → `{ key: value }` |
| Списки | `[1, 2, 3]` → `[1, 2, 3]` |
| Логика | `if cond:` / `elif` / `else` |
| Возврат | `return`, `return value` |
| Вызовы ColdOS | `Window_add(...)`, `popup(...)` |

**Не поддерживается:** классы, `for`/`while`, `try`, `async`,
декораторы, генераторы, comprehensions, `*args`/`**kwargs`.
Неподдерживаемая конструкция даёт понятную ошибку со строкой
и подсказкой, а не ломает сборку молча.

## Структура

```
myapp/
├── src/
│   ├── main.py          # код приложения
│   ├── index.css        # стили
│   └── coldos.d.ts      # декларации ColdOS API
├── assets/              # иконки
├── package.json
└── README.md
```

## Сборка

```bash
cldcli build
```