import React from 'react'

class ManiItem extends React.Component <any, any>
{
    constructor(props:any)
    {
        super(props);
        this.state=
        {
            typeLabel: (this.props.manifest.tag === null) ? this.props.manifest.id : this.props.manifest.tag[0]
        }
    }

    render()
    {
        return(
            
            <li>
                {this.state.typeLabel}
            </li>
        );
    }

}

export default ManiItem;