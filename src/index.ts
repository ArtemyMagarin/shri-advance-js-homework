export = class MySet<T> implements Set<T> {
	private data: T[] = [];

	constructor(values?: readonly T[]) {
		if (values) {
			values.forEach((value) => {
				this.add(value);
			});
		}
	}

	get size(): number {
		return this.data.length;
	}

	add(value: T): this {
		if (!this.has(value)) {
			this.data.push(value);
		}
		return this;
	}

	clear(): void {
		this.data = [];
	}

	delete(value: T): boolean {
		const size = this.size;
		this.data = this.data.filter((item) => item !== value);
		return this.size !== size;
	}

	forEach(
		callbackfn: (value: T, value2: T, set: Set<T>) => void,
		thisArg?: unknown
	): void {
		for (let i = 0; i < this.size; i++) {
			callbackfn.apply(thisArg, [this.data[i], this.data[i], this]);
		}
	}

	has(value: T): boolean {
		return this.data.includes(value);
	}

	*entries(): IterableIterator<[T, T]> {
		for (let i = 0; i < this.size; i++) {
			yield [this.data[i], this.data[i]];
		}
	}

	keys(): IterableIterator<T> {
		return this.values();
	}

	*values(): IterableIterator<T> {
		for (let i = 0; i < this.size; i++) {
			yield this.data[i];
		}
	}

	[Symbol.iterator](): IterableIterator<T> {
		return this.values();
	}

	[Symbol.toStringTag] = '^_^';
};
