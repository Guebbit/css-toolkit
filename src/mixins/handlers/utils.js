export function parseMeasures(args) {
    return args.map((arg) => {
        const trimmed = arg.trim();
        const colonIdx = trimmed.indexOf(':');
        if (colonIdx > -1) {
            return [trimmed.slice(0, colonIdx), trimmed.slice(colonIdx + 1)];
        }
        return [trimmed, trimmed];
    });
}

export function mixinContentToString(mixin) {
    return mixin.nodes ? mixin.nodes.map((n) => n.toString()).join('\n') : '';
}
