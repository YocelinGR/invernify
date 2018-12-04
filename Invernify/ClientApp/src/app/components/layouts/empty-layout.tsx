import React from 'react';

type EmptyLayoutProps = {
    children?: React.ReactNode;
};

const EmptyLayout = (props: EmptyLayoutProps) => props.children as JSX.Element;

export default EmptyLayout;