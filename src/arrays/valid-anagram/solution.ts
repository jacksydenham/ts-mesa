export function isAnagram(s: string, t: string): boolean {

    let map = new Map<string, number>();

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        map.set(s[i]!, (map.get(s[i]!) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        const newCount = (map.get(t[i]!) || 0) - 1;
        map.set(t[i]!, newCount);
        if (newCount < 0) return false
    }

    return true;
};