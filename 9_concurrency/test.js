import { Selector } from 'testcafe';

fixture `Add/Remove ToDo Items`
    .page `http://todomvc.com/examples/vue/`;

//testcafe chrome test.js -c 3

async function addToDoItems (t) {
    await t
        .typeText('.new-todo', 'Buy some milk')
        .pressKey('enter')
        .typeText('.new-todo', 'See the doctor')
        .pressKey('enter')
}

test('Add and Remove ToDo Items', async t => {
    const todoItem     = Selector('ul.todo-list').find('li');
    const removeButton = Selector('button.destroy');

    await addToDoItems(t);

    await t
        .hover(todoItem.nth(0))
        .click(removeButton.filterVisible())
        .expect(todoItem.count).eql(1)
        .hover(todoItem.nth(0))
        .click(removeButton.filterVisible())
        .expect(todoItem.exists).notOk();
});

test('Clear Completed ToDo Items', async t => {
    const todoItem             = Selector('ul.todo-list').find('li');
    const checkbox             = Selector('ul.todo-list').find('.view').find('input[type=checkbox]');
    const clearCompletedButton = Selector('button.clear-completed');

    await addToDoItems(t);

    await t
        .click(checkbox.nth(0))
        .click(checkbox.nth(1))
        .click(clearCompletedButton)
        .expect(todoItem.exists).notOk();
});

test('Toggle View', async t => {
    const todoItem           = Selector('ul.todo-list').find('li');
    const checkbox           = Selector('ul.todo-list').find('.view').find('input[type=checkbox]');
    const seeActiveButton    = Selector('ul.filters').find('a').withText('Active');
    const seeCompletedButton = Selector('ul.filters').find('a').withText('Completed');

    await addToDoItems(t);

    await t
        .click(checkbox.nth(0))
        .click(checkbox.nth(1))
        .click(seeCompletedButton)
        .expect(todoItem.filterVisible().count).eql(2)
        .click(checkbox.nth(0))
        .click(seeActiveButton)
        .expect(todoItem.filterVisible().count).eql(1);
});