/** ******************************************************************************
 *  (c) 2021-2022 Zondax GmbH
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ******************************************************************************* */
import { DEFAULT_START_OPTIONS, DeviceModel } from '@zondax/zemu'
import {DEFAULT_KEY_DELAY} from "@zondax/zemu/src/constants";

const Resolve = require('path').resolve

export const APP_SEED = 'equip will roof matter pink blind book anxiety banner elbow sun young'

const APP_PATH_S = Resolve('../app/output/app_s.elf')
const APP_PATH_X = Resolve('../app/output/app_x.elf')
const APP_PATH_SP = Resolve('../app/output/app_s2.elf')

export const DEFAULT_OPTIONS = {
  ...DEFAULT_START_OPTIONS,
  logging: true,
  custom: `-s "${APP_SEED}"`,
  pressDelay: 1500,
  X11: false,
}

export const DEVICE_MODELS: DeviceModel[] = [
  { name: 'nanos', prefix: 'S', path: APP_PATH_S },
  { name: 'nanox', prefix: 'X', path: APP_PATH_X },
  { name: 'nanosp', prefix: 'SP', path: APP_PATH_SP },
]

export const example_tx_str_basic = {
  account_number: '108',
  chain_id: 'secret-4',
  fee: {
    amount: [
      {
        amount: '600',
        denom: 'uscrt',
      },
    ],
    gas: '200000',
  },
  memo: '',
  msgs: [
    {
      type: 'cosmos-sdk/MsgWithdrawDelegationReward',
      value: {
        delegator_address: 'secret1w34k53py5v5xyluazqpq65agyajavep2rflq6h',
        validator_address: 'secretvaloper1kn3wugetjuy4zetlq6wadchfhvu3x740ae6z6x',
      },
    },
    {
      type: 'cosmos-sdk/MsgWithdrawDelegationReward',
      value: {
        delegator_address: 'secret1w34k53py5v5xyluazqpq65agyajavep2rflq6h',
        validator_address: 'secretvaloper1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u2lcnj0',
      },
    },
  ],
  sequence: '106',
}

export const example_tx_str_expert = {
  account_number: '108',
  chain_id: 'secret-4',
  fee: {
    amount: [
      {
        amount: '600',
        denom: 'uscrt',
      },
    ],
    gas: '200000',
  },
  memo: '',
  msgs: [
    {
      type: 'cosmos-sdk/MsgWithdrawDelegationReward',
      value: {
        delegator_address: 'secret1kky4yzth6gdrm8ga5zlfwhav33yr7hl87jycah',
        validator_address: 'secretvaloper1kn3wugetjuy4zetlq6wadchfhvu3x740ae6z6x',
      },
    },
    {
      type: 'cosmos-sdk/MsgWithdrawDelegationReward',
      value: {
        delegator_address: 'secret1kky4yzth6gdrm8ga5zlfwhav33yr7hl87jycah',
        validator_address: 'secretvaloper1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u2lcnj0',
      },
    },
  ],
  sequence: '106',
}

export const example_tx_str_combined = {
  account_number: '108',
  chain_id: 'secret-4',
  fee: {
    amount: [
      {
        amount: '600',
        denom: 'uscrt',
      },
    ],
    gas: '200000',
  },
  memo: '',
  msgs: [
    {
      type: 'cosmos-sdk/MsgWithdrawDelegationReward',
      value: {
        delegator_address: 'secret1w34k53py5v5xyluazqpq65agyajavep2rflq6h',
        validator_address: 'secretvaloper1648ynlpdw7fqa2axt0w2yp3fk542junl7rsvq6',
      },
    },
    {
      type: 'cosmos-sdk/MsgDelegate',
      value: {
        amount: {
          amount: '20139397',
          denom: 'uscrt',
        },
        delegator_address: 'secret1w34k53py5v5xyluazqpq65agyajavep2rflq6h',
        validator_address: 'secretvaloper1648ynlpdw7fqa2axt0w2yp3fk542junl7rsvq6',
      },
    },
  ],
  sequence: '106',
}

export const example_tx_str_basic2 = {
  account_number: '482',
  chain_id: 'secret-4',
  fee: {
    amount: [],
    gas: '10000000',
  },
  memo: '',
  msgs: [
    {
      type: 'somechain/MsgNew',
      value: {
        coins: [
          {
            amount: '20139397',
            asset: 'uscrt',
          },
        ],
        memo: 'memo_text_goes_here',
        signer: 'secret1w34k53py5v5xyluazqpq65agyajavep2rflq6h',
      },
    },
  ],
  sequence: '6',
}

export const example_tx_str_basic_extra_fields = {
  account_number: '108',
  chain_id: 'secret-4',
  extra_field: 'empty',
  fee: {
    amount: [
      {
        amount: '600',
        denom: 'uscrt',
      },
    ],
    gas: '200000',
  },
  foo: 'bar',
  memo: '',
  msgs: [
    {
      type: 'cosmos-sdk/MsgWithdrawDelegationReward',
      value: {
        delegator_address: 'secret1w34k53py5v5xyluazqpq65agyajavep2rflq6h',
        validator_address: 'secretvaloper1kn3wugetjuy4zetlq6wadchfhvu3x740ae6z6x',
      },
    },
    {
      type: 'cosmos-sdk/MsgWithdrawDelegationReward',
      value: {
        delegator_address: 'secret1w34k53py5v5xyluazqpq65agyajavep2rflq6h',
        validator_address: 'secretvaloper1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u2lcnj0',
      },
    },
  ],
  sequence: '106',
  unknown_field: 123456
}

export const ibc_denoms = {
  account_number: "0",
  chain_id: "secret-4",
  fee: {
    amount: [
      {
        "amount": '5',
        "denom": 'uscrt',
      }
    ],
    gas: '10000',
  },
  memo: "testmemo",
  msgs: [
    {
      inputs: [
        {
          address: "secretaccaddr1d9h8qat5e4ehc5",
          coins: [
            {
              amount: '10',
              denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
            }
          ]
        }
      ],
      outputs: [
        {
          address: 'secretaccaddr1da6hgur4wse3jx32',
          coins: [
            {
              amount: '10',
              denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
            }
          ]
        }
      ]
    }
  ],
  sequence: '1'
}

export const example_tx_str_execute = {
  account_number: '1',
  chain_id: 'secret-4',
  fee: {
    amount: [
      {
        amount: '4000',
        denom: 'uscrt',
      },
    ],
    gas: '200000',
  },
  memo: '',
  msgs: [
    {
      type: 'wasm/MsgExecuteContract',
      value: {
        contract: 'secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek',
        msg: '01vgUGLEoBQLuvmdI1iyurOwWFzG5z/iWet4e9aZ0ZY6Cey5m7/GAsbb35avP/B4Qj3xXJzs4ymOoCdiTPZ/a/y6m8Fno76ANrbR/uErwnOtzI+0PeYhKwoRcQeDLtxbu21yCI6YvIyNKmcII1A3KrJaGxknjevHapAKFn+WwDlNmIMA3+d4vHtwe0F347hR6SyTT8lZDYMSwJ+DOK3yypMChkRYP1MVbVfq0hOD4aT6VUSi8lHBiboXr2maWH55fqlPFcctmYl50ZhBGS83ZXcDX1MDJNjWQg6A2kuGSWUWW6NjTtf7rAiVv5AJXNiB',
        sender: 'secret15zcng5c36ddh9q8wtv597ludtswudgrdthp5al',
        sent_funds: [],
      },
    },
  ],
  sequence: '1'
}