## Installation

- `git clone <repository-url>` this repository
- `cd ask-jeeves`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Requirements
* One Main CreditCardForm component
* Have a onSave which works with Configurable Checkout Contract
* Have a separate onSave which works in wallet-management scenarios. 
* For now just consoled.log to show Proof of concept of different actions being invoked


## Comoponent Structure

Wallet will have two components

- CCForm ( used for checkout cases)
- AuthCCForm (used for wallet-management scenario: does save card + makes auth calls)

```
Application.hbs
|-->Wallet
      |-->EditPaymentMethod
              |--> CCForm
              |--> AuthCCForm
```

Demo:
![ Alt text](https://github.com/saikota/ember-contextual-wallet/blob/main/gif/Recording.gif)
