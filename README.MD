# Тестовое задание для csssr.ru

Задания:
---------
Slomux - реализация Flux, в которой, как следует из названия, что-то сломано.
Нужно выяснить что здесь сломано

Исправления:
------------
1. Это не Flux а сломанный Redux на мой взгляд
2. В методах класса React Component не поддерживается авто-bind ссылки на себя "this", поэтому нужно либо
использовать стрелочные функции или биндить их чере .bind() (методы updateText, addTodo)
3. mapStateToProps и mapDispatchToProps транслируют только state компонента и action-ы в компонент, поэтому
если нужно было вот так указать "title" компонента "ToDo" то необходимо добавить props непосредственно в компонент
4. updateText - поставил setState() вместо непосредственное присваивание state - без этого компонент не будет обновлять
состояние(текст не будет появляться в поле). Вообще так делать не рекомендуется в документации React.

Улучшения:
-----------
1. Добавил PropTypes - это позволит избежать ошибок, когда какой-то prop не передается (для title поставил isRequired
чтобы появился warning, хотя можно и без него - внутри компонента есть обработка этой ситуации)
2. Поставил везде точки с запятой в конце строк. Можно и без них, но рекомендуется их ставить
https://learn.javascript.ru/structure
3. Возможно лучше было бы перенести и title и todoText внутрь state компонента. В документации Redux рекомендуется
делать так, чтобы компонент однозначно определялся state-ом. Но в данном примере - избыточно.



