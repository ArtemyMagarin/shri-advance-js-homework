import { test } from 'uvu';
import * as assert from 'uvu/assert';

import MySet from '../src/index';

test('Xранит только уникальные значения', () => {
	const data = [4, 8, 15, 15, 16, 23, 42];
	const uniqData = [4, 8, 15, 16, 23, 42];
	const set = new MySet(data);
	assert.equal([...set], uniqData);
});

test('Есть свойство size', () => {
	const data = [4, 8, 15, 15, 16, 23, 42];
	const set = new MySet(data);
	assert.equal(set.size, 6);
});

test('Работает в цикле for-of', () => {
	const data = [4, 8, 15, 15, 16, 23, 42];
	const uniqData = [4, 8, 15, 16, 23, 42];
	const set = new MySet(data);
	const collectedData = [];
	for (const item of set) {
		collectedData.push(item);
	}
	assert.equal(collectedData, uniqData);
});

test('Есть метод entries', () => {
	const data = [1, 4, 3];
	const set = new MySet(data);

	const collectedData = [];
	for (const item of set.entries()) {
		collectedData.push(item);
	}
	assert.equal(
		collectedData,
		data.map((item) => [item, item])
	);
});

test('Есть метод keys', () => {
	const data = [1, 4, 3];
	const set = new MySet(data);

	const collectedData = [];
	for (const item of set.keys()) {
		collectedData.push(item);
	}
	assert.equal(collectedData, data);
});

test('Есть метод values', () => {
	const data = [1, 4, 3];
	const set = new MySet(data);

	const collectedData = [];
	for (const item of set.values()) {
		collectedData.push(item);
	}
	assert.equal(collectedData, data);
});

test('Есть метод clear', () => {
	const data = [1, 4, 3];
	const set = new MySet(data);
	assert.equal(set.size, 3);
	set.clear();
	assert.equal(set.size, 0);
	assert.equal([...set], []);
});

test('Есть метод add', () => {
	const set = new MySet();
	assert.equal(set.size, 0);
	set.add(1);
	assert.equal(set.size, 1);
	assert.equal([...set], [1]);
});

test('Метод add поддерживает цепочку вызовов', () => {
	const set = new MySet();
	assert.equal(set.size, 0);
	set.add(1).add(2).add(3).add(2).add(1);
	assert.equal(set.size, 3);
	assert.equal([...set], [1, 2, 3]);
});

test('Есть метод delete', () => {
	const set = new MySet([1, 2, 3]);
	assert.equal(set.size, 3);
	set.delete(1);
	set.delete(2);
	assert.ok(set.delete(3));
	assert.not.ok(set.delete(4));
	assert.equal(set.size, 0);
	assert.equal([...set], []);
});

test('Есть метод has', () => {
	const obj = {
		foo() {
			return 'bar';
		},
	};

	const set = new MySet([obj]);
	assert.ok(set.has(obj));
	set.delete(obj);
	assert.not.ok(set.has(obj));
});

test('Использует кастомный string tag', () => {
	const set = new MySet();
	assert.equal(String(set), '[object ^_^]');
	assert.equal(Object.prototype.toString.call(set), '[object ^_^]');
});

test('Метод valueOf возвращает сам себя', () => {
	const set = new MySet([1, 4, 2]);
	assert.ok(set === set.valueOf());
});

test('Метод forEach вторым аргументом принимает контекст', () => {
	const obj = {
		getValue() {
			return this.value;
		},
	};
	const data = {
		value: 42,
	};

	const set = new MySet<typeof obj>([obj]);
	set.forEach(function (item) {
		assert.equal(item.getValue.call(this), 42);
	}, data);
});

test.run();
