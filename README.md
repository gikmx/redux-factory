# [@gik/redux-factory](https://github.com/gikmx/redux-factory#readme) *0.0.6*
> A shorthand for our redux/redux-thunk workflow

##### Contributors
- [Héctor Menéndez](mailto:hector@gik.mx) []()

##### Supported platforms
- darwin
- linux

#### <a name="table-of-contents"></a> Table of contents
- **[Factory](#Factory)** `function` Actions and Reducers factory.
- **[Store](#Store)** `function` Store creator.


# <a name="Factory"></a> Factory
> global  function


Actions and Reducers factory.
Shorthand for reducing boilerplate needed to cerate reducers and actions.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>initState</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>The initial state for the reducer.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>declarations</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>An object contaning an action and a reducer.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>prefix</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>An optional prefix for the actions/reducers.</td>
    </tr>
</table>


###### Returns
 [`Object`](#Object) <span style="font-weight:normal"> - A { Actions, Reducers } object.</span>

<small>**[▲ Top](#table-of-contents)**</small>

---

# <a name="Store"></a> Store
> global  function


Store creator.
Shorthand for Redux's CreateStore.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>reducers</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a> | 
                <a href="#function">function</a>
        </td>
        <td>Either a reducer or an object containing reducers.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>initStore</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>The initial value of the store.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>middleware</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Array">Array</a>
        </td>
        <td>An array of middlewares to register.</td>
    </tr>
</table>


###### Returns
 [`ReduxStore`](#ReduxStore) <span style="font-weight:normal"> - The store to pass to the provider.</span>

<small>**[▲ Top](#table-of-contents)**</small>

---

