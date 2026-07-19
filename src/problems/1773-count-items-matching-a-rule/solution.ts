export function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {

    let matches = 0;

    const ruleMap: Record<string,number> = {
        "type": 0,
        "color": 1,
        "name": 2
    }

    for (let i = 0; i < items.length; i++) {
        const currItem = items[i]
        matches += currItem![ruleMap[ruleKey]!] === ruleValue ? 1 : 0
    };

    return matches;
};

// Making more of an effort to avoid non-null asserts, we can solve this with a more dynamic filter.
export function countMatchesCleanly(items: string[][], ruleKey: string, ruleValue: string): number {

    // tighter type definitions. more readable? maybe... also JS maps obj keys as strings so we don't need "..."
    const ruleMap: Record<"type" | "color" | "name", number> = {
        type: 0,
        color: 1,
        name: 2
    }

    // cast ruleKey as key of the type of the map.
    const index = ruleMap[ruleKey as keyof typeof ruleMap];
    
    // then we just return the length of an array of items which only include items with the matching ruleValue.
    return items.filter(item => item[index] === ruleValue).length;
}

// This is great for leet, but really it's not very readable. and the main problem is that 'keyof typeof' assertion.
// in the real world, we can just strictly type the ruleKey as the options we have, and the solution becomes far simpler.
export function countMatchesEvenMoreCleanly(items: string[][], ruleKey: "type" | "color" | "name", ruleValue: string): number {

    const ruleMap = {
        type: 0,
        color: 1,
        name: 2
    }

    const index = ruleMap[ruleKey];
    return items.filter(item => item[index] === ruleValue).length;
}