
type Mods = Record<string, boolean | string>

export const classNames = (cls: string, additional: string[], mods: Mods): string => {
    return ([
        cls,
        ...additional,
        Object.entries(mods)
        .filter(([mod, value]) => Boolean(value))
        .map(([mod]) => mod)
    ].join(' '))
}