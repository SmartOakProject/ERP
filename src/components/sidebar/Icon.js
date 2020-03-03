import React from 'react';
import {
    TiClipboard,
    TiHomeOutline,
    TiThLargeOutline,
    TiPuzzleOutline
} from 'react-icons/ti';
import { FaRegFlag } from 'react-icons/fa';

const Icon = props => {
    const components = {
        TiClipboard: TiClipboard,
        TiThLargeOutline: TiThLargeOutline,
        TiPuzzleOutline: TiPuzzleOutline,
        FaRegFlag: FaRegFlag,
        TiHomeOutline: TiHomeOutline
    };
    const TagName = components[props.tag || 'TiClipboard'];
    return <TagName />;
};
export default Icon;
