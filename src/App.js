import * as React from "react";
import logo from './logo.png'
export default function App() {
  return (
    <div className="bg-neutral-50">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0">
          <div className="items-stretch bg-slate-800 flex w-full grow flex-col mx-auto px-2 py-4">
            <div className="flex gap-3 pr-4 items-start">
              <div className="rounded bg-white flex aspect-square flex-col justify-center items-center w-10 h-10 px-px">
                <img
                  loading="lazy"
                  srcSet={logo}
                  className="aspect-square object-contain object-center w-full overflow-hidden"
                />
              </div>
              <span className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-white text-base font-medium leading-6 whitespace-nowrap">
                  Nishyan
                </div>
                <div className="text-white text-sm leading-4 underline whitespace-nowrap mt-1">
                  Visit store
                </div>
              </span>
            </div>
            <span className="items-stretch rounded flex justify-between gap-3 mt-6 px-4 py-2 max-md:pr-5">
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Home
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e4690c7f2befccb50b4d3f999b4f338342183a45f2d83d0b1080d217a279c11?apiKey=08a210dad29b479995961d6b65712358&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Orders
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3c12e686454b5bde5c08b98673715c206a4470880abb6f1fcd058cf045bb062?apiKey=08a210dad29b479995961d6b65712358&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Products
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bd713d6c5b0dcec5b8c0fb0d8623a90af568ff2d1fda284f569296a3b3105ec?apiKey=08a210dad29b479995961d6b65712358&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Delivery
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e7bcc2abd1f7595ad2e0a035c5443941fae311f0b7f0675e4ced94a89333e4a?apiKey=08a210dad29b479995961d6b65712358&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Marketing
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ca9dff6a359e7031a422733289e9709f882e9436ba1c4f8efcc0f0cc06fd136?apiKey=08a210dad29b479995961d6b65712358&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Analytics
              </div>
            </span>
            <span className="items-stretch rounded bg-white bg-opacity-10 flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9035aaec1fc4191caabb99a0e91088cfc015ee5d8d63020b3587676244e47ab2?apiKey=08a210dad29b479995961d6b65712358&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Payouts
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cff59b131f3152034636c7ceee1cbff61b77f140250a37182129cb307413fd5c?apiKey=08a210dad29b479995961d6b65712358&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Discounts
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9656b8a1dcd1084d7e5eaf4cf72397ce0a3a173b6760cd6fded2491fc35f91db?apiKey=08a210dad29b479995961d6b65712358&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Audience
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eff64b28c853028ee4930c451398cfce37cb4733a741f0bdd1ba51cdce8132b1?apiKey=08a210dad29b479995961d6b65712358&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Appearance
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a1cfa753b3e64a310ecae5b437efdd3bee6ccdfb69812b8bda307de831409a0?apiKey=08a210dad29b479995961d6b65712358&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Plugins
              </div>
            </span>
            <div className="items-stretch rounded bg-slate-700 flex w-full flex-col justify-center mt-80 pl-3.5 pr-9 py-1.5 max-md:mt-10 max-md:pr-5">
              <div className="items-center flex justify-between gap-3">
                <div className="items-center rounded bg-white bg-opacity-10 flex aspect-[1.0833333333333333] flex-col justify-center my-auto px-2 py-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/530b5ed250b1528d6e39726043325a5bf0aae1a0f62a9c74a946abc023b56c6f?apiKey=08a210dad29b479995961d6b65712358&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden"
                  />
                </div>
                <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-white text-sm leading-4 whitespace-nowrap">
                    Available credits
                  </div>
                  <div className="text-white text-base font-medium leading-6">
                    222.10
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
          <span className="flex flex-col px-5 max-md:max-w-full">
            <div className="items-stretch bg-white self-stretch flex w-full justify-between gap-5 px-8 py-3 border-b-zinc-300 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <div className="flex items-center justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="flex grow basis-[0%] flex-col justify-center my-auto px-16 py-1.5 items-start max-md:px-5">
                  <span className="flex gap-1.5 ml-9 items-start max-md:ml-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/69e98bb0d1f8dd214cc92dd68264dce91e016f9a94276c03e0d86ed742762778?apiKey=08a210dad29b479995961d6b65712358&"
                      className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-600 text-xs leading-4 self-stretch grow whitespace-nowrap">
                      How it works
                    </div>
                  </span>
                </div>
                <span className="items-center self-stretch bg-zinc-100 flex justify-between gap-2 px-4 py-2.5 rounded-md max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/83262929c93ccf41bc833d21512ca02a932397a369096e0a17ae8db3a1b6626d?apiKey=08a210dad29b479995961d6b65712358&"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-zinc-500 text-base leading-6 self-stretch grow whitespace-nowrap">
                    Search features, tutorials, etc.
                  </div>
                </span>
              </div>
              <div className="items-stretch flex justify-between gap-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/75fef9813860b9d417790c9a490d0ff5318f51cce05ebd9a62061d4465a219b7?apiKey=08a210dad29b479995961d6b65712358&"
                  className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bc56f1dba499acaa61705f0f5c8857ad4a4be1204b6a8e4160b97835da38735?apiKey=08a210dad29b479995961d6b65712358&"
                  className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
              </div>
            </div>
            <span className="justify-between items-center self-stretch flex gap-5 mt-8 mx-3 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
              <div className="text-zinc-900 text-xl font-medium leading-7 my-auto">
                Overview
              </div>
              <span className="rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white self-stretch flex justify-between gap-2 px-3.5 py-2.5 border-solid items-start">
                <div className="text-neutral-600 text-base leading-6 grow whitespace-nowrap">
                  This Month
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea6c4d4d063668e97fd083caf97d2f32b96e8adf10b71eb46643bd88c8662b37?apiKey=08a210dad29b479995961d6b65712358&"
                  className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </span>
            </span>
            <div className="self-stretch mt-6 mx-3 max-md:max-w-full max-md:mr-2.5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="justify-center items-stretch shadow-sm flex grow flex-col max-md:mt-5">
                    <div className="bg-sky-700 flex w-full flex-col pt-5 rounded-lg items-start">
                      <span className="items-stretch flex gap-2 ml-5 max-md:ml-2.5">
                        <div className="text-white text-base leading-6 grow whitespace-nowrap">
                          Next Payout
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/508dcb65f3e945ba7be2ca75883561ff382049444f4b78581db39859d283841a?apiKey=08a210dad29b479995961d6b65712358&"
                          className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                      </span>
                      <span className="justify-between items-stretch self-center flex w-[331px] max-w-full gap-5 mt-4">
                        <div className="text-white text-3xl font-medium leading-10">
                          ₹2,312.23
                        </div>
                        <span className="items-stretch self-center flex gap-0 my-auto">
                          <div className="text-white text-base font-medium leading-6 underline grow whitespace-nowrap">
                            23 orders
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebcabe9719be7155ad4ec3337f88e0c9a4d3edc90014d028d2bbd534de877008?apiKey=08a210dad29b479995961d6b65712358&"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                          />
                        </span>
                      </span>
                      <span className="justify-between items-stretch bg-sky-800 self-stretch flex gap-5 mt-5 px-6 py-2 rounded-lg max-md:px-5">
                        <div className="text-zinc-100 text-sm leading-5">
                          Next payout date:
                        </div>
                        <div className="text-zinc-100 text-sm font-medium leading-5">
                          Today, 04:00PM
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch shadow-sm bg-white flex w-full flex-col mx-auto p-5 rounded-lg max-md:mt-5">
                    <span className="items-stretch flex justify-between gap-2 pr-5 max-md:pr-5">
                      <div className="text-neutral-600 text-base leading-6 grow shrink basis-auto">
                        Amount Pending
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/05c480a640c56910fb889e734bcea046caca4619f73b512ad30b03eb6d1a3b1a?apiKey=08a210dad29b479995961d6b65712358&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                      />
                    </span>
                    <span className="justify-between items-stretch flex w-full gap-5 mt-4">
                      <div className="text-zinc-900 text-3xl font-medium leading-10">
                        ₹92,312.20
                      </div>
                      <span className="items-stretch self-center flex gap-0 my-auto">
                        <div className="text-sky-700 text-base font-medium leading-6 underline grow whitespace-nowrap">
                          13 orders
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b86f140b31a7d0e1a56cf24bbca3f633793117eab583a2571c93d9575e27cc3?apiKey=08a210dad29b479995961d6b65712358&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <span className="items-stretch shadow-sm bg-white flex w-full flex-col mx-auto p-5 rounded-lg max-md:mt-5">
                    <span className="items-stretch flex justify-between gap-2 pr-4">
                      <div className="text-neutral-600 text-base leading-6 grow shrink basis-auto">
                        Amount Processed
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/229a31b7fe4a5c160140562a0d14dc8fb21c447c32fb8b3fb1148ebb871f88d9?apiKey=08a210dad29b479995961d6b65712358&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                      />
                    </span>
                    <div className="text-zinc-900 text-3xl font-medium leading-10 mt-4">
                      ₹23,92,312.19
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-zinc-900 text-xl font-medium leading-7 whitespace-nowrap ml-3 mt-8 self-start max-md:ml-2.5">
              Transactions | This Month
            </div>
            <div className="items-stretch flex gap-3 ml-3 mt-5 self-start max-md:ml-2.5">
              <span className="text-white text-sm font-medium leading-5 whitespace-nowrap items-stretch bg-sky-700 grow justify-center px-4 py-1.5 rounded-[40px]">
                Payouts (22)
              </span>
              <span className="text-zinc-500 text-sm font-medium leading-5 whitespace-nowrap items-stretch bg-neutral-200 grow justify-center px-4 py-1.5 rounded-[40px]">
                Refunds (2)
              </span>
            </div>
            <div className="items-stretch shadow-sm bg-white self-stretch flex flex-col mt-5 mx-3 px-3 py-2.5 rounded-lg max-md:max-w-full max-md:mr-2.5">
              <div className="justify-between items-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white flex flex-col justify-center pl-4 pr-16 py-3.5 border-solid items-start max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/92865a37b8d9c2f03788891fd82fd5a44bfbfc37aec974b981d96b6b4882996b?apiKey=08a210dad29b479995961d6b65712358&"
                    className="aspect-square object-contain object-center w-3.5 overflow-hidden max-w-full"
                  />
                </div>
                <div className="justify-end items-stretch self-center flex gap-4 my-auto">
                  <span className="items-stretch rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white flex justify-between gap-1.5 px-3 py-1.5 border-solid">
                    <div className="text-neutral-600 text-base leading-6">
                      Sort
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/90651e033f9718228a00a26c2c8cf585e295842dfc48747b4ad4d5397db5cf5b?apiKey=08a210dad29b479995961d6b65712358&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/292f7ba24753d98c8b1dfb784cfd238342ba9e34a3c5df64d81152c052e02429?apiKey=08a210dad29b479995961d6b65712358&"
                    className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
              </div>
              <span className="items-stretch rounded bg-zinc-100 flex w-full justify-between gap-5 mt-3 px-3 py-2.5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-center flex aspect-[2.25] flex-col justify-center pl-9 py-1.5 max-md:pl-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/283878a4e7b3868439d76d492c297f96327a5dd97f255e7eaa348a5dcf882cef?apiKey=08a210dad29b479995961d6b65712358&"
                    className="aspect-square object-contain object-center w-2 overflow-hidden"
                  />
                </div>
                <span className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-neutral-600 text-right text-sm font-medium leading-5">
                    Transaction ID
                  </div>
                  <div className="text-neutral-600 text-right text-sm font-medium leading-5">
                    Order amount
                  </div>
                  <div className="text-neutral-600 text-right text-sm font-medium leading-5">
                    Transaction fees
                  </div>
                </span>
                <div className="text-neutral-600 text-right text-sm font-medium leading-5">
                  Total
                </div>
              </span>
              <div className="items-stretch bg-white flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="justify-center items-start bg-white flex w-[151px] shrink-0 h-5 flex-col" />
                  <div className="justify-center items-stretch bg-white flex grow basis-[0%] flex-col pr-16 max-md:pr-5">
                    <span className="items-center flex justify-between gap-1.5">
                      <div className="flex w-2.5 shrink-0 h-2.5 flex-col my-auto rounded-[50%]" />
                      <div className="text-zinc-900 text-sm leading-5 self-stretch grow whitespace-nowrap">
                        Processing
                      </div>
                    </span>
                  </div>
                  <span className="text-neutral-600 text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-white grow pr-16 max-md:pr-5">
                    131634495747
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹10,125.00
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,125.00
                  </span>
                  <span className="text-neutral-600 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹9,312
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="justify-center items-start bg-white flex w-[151px] shrink-0 h-5 flex-col" />
                  <div className="justify-center items-stretch bg-white flex grow basis-[0%] flex-col pr-16 max-md:pr-5">
                    <span className="items-center flex justify-between gap-1.5 max-md:mr-0.5">
                      <div className="flex w-2.5 shrink-0 h-2.5 flex-col my-auto rounded-[50%]" />
                      <div className="text-zinc-900 text-sm leading-5 self-stretch grow whitespace-nowrap">
                        Successful
                      </div>
                    </span>
                  </div>
                  <span className="text-neutral-600 text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-white grow pr-16 max-md:pr-5">
                    131634495747
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹10,125.00
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,125.00
                  </span>
                  <span className="text-neutral-600 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹9,312
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="justify-center items-start bg-white flex w-[151px] shrink-0 h-5 flex-col" />
                  <div className="justify-center items-stretch bg-white flex grow basis-[0%] flex-col pr-16 max-md:pr-5">
                    <span className="items-center flex justify-between gap-1.5 max-md:mr-0.5">
                      <div className="flex w-2.5 shrink-0 h-2.5 flex-col my-auto rounded-[50%]" />
                      <div className="text-zinc-900 text-sm leading-5 self-stretch grow whitespace-nowrap">
                        Successful
                      </div>
                    </span>
                  </div>
                  <span className="text-neutral-600 text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-white grow pr-16 max-md:pr-5">
                    131634495747
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹10,125.00
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,125.00
                  </span>
                  <span className="text-neutral-600 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹9,312
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="justify-center items-start bg-white flex w-[151px] shrink-0 h-5 flex-col" />
                  <div className="justify-center items-stretch bg-white flex grow basis-[0%] flex-col pr-16 max-md:pr-5">
                    <span className="items-center flex justify-between gap-1.5 max-md:mr-0.5">
                      <div className="flex w-2.5 shrink-0 h-2.5 flex-col my-auto rounded-[50%]" />
                      <div className="text-zinc-900 text-sm leading-5 self-stretch grow whitespace-nowrap">
                        Successful
                      </div>
                    </span>
                  </div>
                  <span className="text-neutral-600 text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-white grow pr-16 max-md:pr-5">
                    131634495747
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹10,125.00
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,125.00
                  </span>
                  <span className="text-neutral-600 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹9,312
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="justify-center items-start bg-white flex w-[151px] shrink-0 h-5 flex-col" />
                  <div className="justify-center items-stretch bg-white flex grow basis-[0%] flex-col pr-16 max-md:pr-5">
                    <span className="items-center flex justify-between gap-1.5 max-md:mr-0.5">
                      <div className="flex w-2.5 shrink-0 h-2.5 flex-col my-auto rounded-[50%]" />
                      <div className="text-zinc-900 text-sm leading-5 self-stretch grow whitespace-nowrap">
                        Successful
                      </div>
                    </span>
                  </div>
                  <span className="text-neutral-600 text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-white grow pr-16 max-md:pr-5">
                    131634495747
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹10,125.00
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,125.00
                  </span>
                  <span className="text-neutral-600 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹9,312
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="justify-center items-start bg-white flex w-[151px] shrink-0 h-5 flex-col" />
                  <div className="justify-center items-stretch bg-white flex grow basis-[0%] flex-col pr-16 max-md:pr-5">
                    <span className="items-center flex justify-between gap-1.5 max-md:mr-0.5">
                      <div className="flex w-2.5 shrink-0 h-2.5 flex-col my-auto rounded-[50%]" />
                      <div className="text-zinc-900 text-sm leading-5 self-stretch grow whitespace-nowrap">
                        Successful
                      </div>
                    </span>
                  </div>
                  <span className="text-neutral-600 text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-white grow pr-16 max-md:pr-5">
                    131634495747
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹10,125.00
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,125.00
                  </span>
                  <span className="text-neutral-600 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹9,312
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white flex justify-between gap-5 px-3 py-3.5 max-md:max-w-full max-md:flex-wrap">
                <div className="justify-center items-start bg-white flex w-[151px] shrink-0 h-5 flex-col" />
                <div className="justify-center items-stretch bg-white flex grow basis-[0%] flex-col pr-16 max-md:pr-5">
                  <span className="items-center flex justify-between gap-1.5 max-md:mr-0.5">
                    <div className="flex w-2.5 shrink-0 h-2.5 flex-col my-auto rounded-[50%]" />
                    <div className="text-zinc-900 text-sm leading-5 self-stretch grow whitespace-nowrap">
                      Successful
                    </div>
                  </span>
                </div>
                <span className="text-neutral-600 text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-white grow pr-16 max-md:pr-5">
                  131634495747
                </span>
                <span className="text-zinc-900 text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                  ₹10,125.00
                </span>
                <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                  ₹1,125.00
                </span>
                <span className="text-neutral-600 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                  ₹9,312
                </span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}


