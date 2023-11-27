import React from "react";

//Блок для вывода и отображения картинок (так как в React не получилось использовать тэг img)
class Image extends React.Component
{
    render()
    {
        return(<img src={this.props.image} />)
    }
}

export default Image