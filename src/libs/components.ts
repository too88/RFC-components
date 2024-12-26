import { kebabCase } from "change-case"

type MapModifiersModifier = string | false | null | undefined | (string | false | null | undefined)[];

function generateModifierClassArray(baseClassName: string, ...modifiers: MapModifiersModifier[]): string[] {
    let classNameArray: string[] = [];

    for (const modifier of modifiers) {
        if (Array.isArray(modifier)) {
            classNameArray = classNameArray.concat(generateModifierClassArray(baseClassName, ...modifier));
        } else if (typeof modifier === 'string' && modifier.length > 0) {
            classNameArray.push(baseClassName + '--' + modifier);
        }
    }

    return classNameArray
}

/**
 * 
 * Generate `className` from base class name and modifiers, based on MindBEMing.
 */
export function mapModifiers(baseClassName: string, ...modifiers: MapModifiersModifier[]): string {
    return (
        baseClassName + ' ' + generateModifierClassArray(baseClassName, ...modifiers).join(' ').trim()
    ).trim()
}

export type ModifierProp<M extends string> = M | M[];

export function injectModifiers<M extends string>(
    baseModifiers: ModifierProp<M> | undefined,
    ...additionalModifiers: M[]
): ModifierProp<M> {
    const modifiers = (() => {
        if (typeof baseModifiers === 'undefined') {
            return [];
        } else if (typeof baseModifiers === 'string') {
            return [baseModifiers];
        }
        return baseModifiers;
    })();

    additionalModifiers = additionalModifiers.filter(mod => !modifiers.includes(mod));

    return modifiers.concat(additionalModifiers);
}

export function mapDataAttribute(dataSet: Record<string, string | undefined> | undefined): Record<string, string> {
    const result: Record<string, string> = {};

    for (const key in dataSet) {
        const value = dataSet[key];
        if (typeof value === 'string') {
            result[`data-${kebabCase(key)}`] = value;
        }
    }

    return result;
}