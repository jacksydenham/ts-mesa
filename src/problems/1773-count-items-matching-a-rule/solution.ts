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
