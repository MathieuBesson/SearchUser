import React from 'react'
import './SearchBar.scss'
import RangeInput from '../inputs/RangeInput'
import TextInput from '../inputs/TextInput'
import RadioInput from '../inputs/RadioInput'

class SearchBar extends React.Component {
    handleSearchIdentityChange = (e) => {
        this.props.onFilterItemChange('identity', e.target.value)
    }

    handleSearchMacChange = (e) => {
        let value = (e.target.value.toUpperCase()
            .replace(/[^0-9|A-Z]/g, '')
            .match(/.{1,2}/g) || []).join(":") // if value === '' --> []
        if (value.length <= 17) { this.props.onFilterItemChange('mac', value) }
    }

    handleSearchIpChange = (e) => {
        let value = e.target.value.replace(/[^0-9|.]/g, '')
        if (value.length <= 15) { this.props.onFilterItemChange('ip', value) }
    }

    firstCaractToUpper(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const inputNames = {
            text: ['identity', 'mac', 'ip'],
            range: ['likes', 'friends', 'photos'],
            radio: ['usersLoginStatus']
        };
        const inputTextPlaceholders = {
            'identity' : 'iron@man.com',
            'mac' : '00:1B:44:11:3A:B7',
            'ip' : '207.142.131.245'
        }

        let inputs = {
            text: [],
            range: [],
            radio: []
        };

        inputs.text.push(inputNames.text.map((inputName, id) => (
            <TextInput
                name={inputName}
                value={this.props.filters[inputName]}
                handleChange={this['handleSearch' + this.firstCaractToUpper(inputName) + 'Change']}
                key={id}
                placeholder={inputTextPlaceholders[inputName]}
            />
        )));

        inputs.range.push(inputNames.range.map((inputName, id) => (
            <RangeInput
                name={inputName}
                max={this.props.rangesExtremums[inputName].max}
                min={this.props.rangesExtremums[inputName].min}
                value={this.props.filters[inputName]}
                handleChange={(e) => this.props.onFilterItemChange(inputName, e.target.value)}
                key={id}
            />
        )));

        inputs.radio.push(inputNames.radio.map((inputName, id) => (
            <RadioInput
                name={inputName}
                value={this.props.filters[inputName]}
                choices={['all', 'connected', 'recently', 'disconnected']}
                handleChange={(e) => {this.props.onFilterItemChange(inputName, e.target.value)}}
                key={id}
            />
        )));

        return (
            <form className="search-bar">
                <section className="search-bar-group">
                    <p className="search-bar-group-label">Search by Identy, Mac Adress or IP Adress</p>
                    <div className="search-bar-group-item">
                        {inputs.text}   
                    </div>
                </section>
                <section className="search-bar-group">
                    <p className="search-bar-group-label">Search by a min likes, friends, or photos range</p>
                    <div className="search-bar-group-item">
                        {inputs.range}
                    </div>
                </section>
                <section className="search-bar-group">
                    <p className="search-bar-group-label">Search by user login status</p>
                    <div className="search-bar-group-item">
                        {inputs.radio}
                    </div>
                </section>
            </form>
        );
    }
}



export default SearchBar;