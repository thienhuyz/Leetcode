class TimeLimitedCache {
    cache: Record<number, { value: number, timer: ReturnType<typeof setTimeout> }>;

    constructor() {
        this.cache = {};
    }

    set(key: number, value: number, duration: number): boolean {
        const exists = key in this.cache;

        if (exists) clearTimeout(this.cache[key].timer);

        this.cache[key] = {
            value: value,
            timer: setTimeout(() => delete this.cache[key], duration)
        };

        return exists;
    }

    get(key: number): number {
        if (key in this.cache) return this.cache[key].value;
        return -1;
    }

    count(): number {
        return Object.keys(this.cache).length;
    }
}