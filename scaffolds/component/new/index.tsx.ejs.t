---
to: src/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.tsx
sh: prettier --write src/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.tsx
---
import React from 'react';
import { mapModifiers, ModifierProp} from 'libs/component';

export interface <%= h.changeCase.pascal(name) %>Props {
    children?: React.ReactNode,
    modifiers?: ModifierProp<'primary' | 'secondary'>;
}

export const <%= h.changeCase.pascal(name) %>: React.FC<<%= h.changeCase.pascal(name) %>Props> = ({ children, modifiers }) => (
    <div className={mapModifiers('<%= level[0] %>-<%= h.changeCase.param(name) %>', modifiers)}>
        {children}
    </div>
);