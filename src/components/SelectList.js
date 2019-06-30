import React from 'react'
import PropTypes from 'prop-types'

export class SelectList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          selectData: [],
          selectStatus: false,
          search:"",
          isClearInput: false
        };
    }

    checkSelect = e => {

        this.props.data.forEach(element => {

            if(element.id.toString() === e.target.getAttribute('data-id')){

                let found = this.state.selectData.some(function (el) {
                    return el.id === element.id;
                });
                if (!found) { 
                    this.setState( (state)=>{
                        selectData: state.selectData.push(element)
                    })
                }
                          
            }
        });
    };

    /**удаление тегов */
    deleteTagHandler = (e) => {
        this.state.selectData.forEach( (el, index) => {
            if(el.id.toString() === e.target.getAttribute('data-tag-id') ){
                this.setState((state)=>{
                    selectData: state.selectData.splice(index, 1)
                });
                
            }
        })
    };


    /**handle select */
    changeHandler = (e) => {
        this.setState({selectStatus: !this.state.selectStatus});

        /**
         * клик в другом месте переключает статус
         */
        const select = e.target;
        window.onclick = (e)=> {
            if (e.target !== select) {
                this.setState({selectStatus: !this.state.selectStatus});
            }
        }
    };

    searchHandle = (e) => {
        this.setState({search: e.target.value.toLowerCase()});
        this.setState({isClearInput: !this.state.isClearInput});
    };

    /**добавление  */
    addHandler = (e) => {

        if(e.keyCode === 'Enter' && e.target.value.length > 0){
            const option = {
                label: e.target.value,
                value: parseInt(+new Date()/1000, 10),
                id: parseInt(+new Date()/1000, 10)
            };
            this.props.addingOption(option);
            this.clearSearch();
            e.target.value = ''
        }
    };

    onKeyUpBackspace = (e) => {
        if(e.target.value.length === 0) {
            this.setState({
                isClearInput: !this.state.isClearInput
            });

            if (e.keyCode === 8 || e.keyCode === 46 && this.state.selectData.length > 0) {
                if(this.state.isClearInput)
                    this.setState({
                        selecData: this.state.selectData.pop()
                    })
            }
        }
    };

    /**очищает выбранные теги */
    deleteHandler = () => {
        this.setState({
            selectData: []
        })
    };

    clearSearch(){
        this.setState({
            search:""
        })
    }

    /**рендер элементов списка */
    templateItem = () => {
        const options = this.props.data;

        return options.map((item) => {

            /**
             * проверяет наличие значения в выбранном массиве this.state.selectData
             */
            if(this.state.selectData.find((el)=>el.id === item.id) === undefined ) {

                /**
                 * проверка и фильтер по значению из инпута
                 */
                if (this.state.search.length > 0) {

                    if (item.label.indexOf(this.state.search) !== -1) {
                        return (
                            <li className="select-list__item" data-id={item.id} key={item.id}
                                onClick={this.checkSelect}>
                                {item.label}
                            </li>
                        )
                    }
                } else {
                    /**
                     * рендер если нет значения из инпута
                     */
                    return (
                        <li className="select-list__item" data-id={item.id} key={item.id} onClick={this.checkSelect}>
                            {item.label}
                        </li>
                    )
                }
            }
            
        })
    };

    /**ренедер выбранных тегов */
    templateTag = () => {
        const tag = this.state.selectData;

        return tag.map((item) => {
            return (
                <div className="select-list-tag" key={item.id}>
                    <span>{item.label}</span> <button className="select-list-tag-close" data-tag-id={item.id} onClick={this.deleteTagHandler}>x</button>
                </div>
            )
        })
    };

    /**общий шаблон */
    template = () => {
        let classNameSelect = this.state.selectStatus ? "select-list-outer active" : "select-list-outer";
        return(
            <div className={classNameSelect} onClick={this.changeHandler}>
                {/**render list */}
                {this.state.selectData ? 
                    this.templateTag()
                     : null
                }
                
                <input className="select-list-input" onChange={this.searchHandle} onKeyPress={this.addHandler} onKeyUp={this.onKeyUpBackspace} placeholder={"введите слово для поиска"} />
                { (this.state.selectData.length > 0) ? (
                    <button className="select-list-delete" onClick={this.deleteHandler}>x</button>
                    ): null
                }
                
                {/**render list */}
                {this.state.selectStatus ? (
                    <ul className="select-list">
                        {this.templateItem()}  
                    </ul>
                    ) : null
                }

            </div>
        )
    };

    render() {
        return this.template()
    }
}

SelectList.propTypes = {
    data: PropTypes.array.isRequired,
    addingOption: PropTypes.func.isRequired,
};

