---
sidebar_position: 3
title: Market creation
---

# How Are Markets Created?

Markets on Ignite Market are crafted by our dedicated markets team. While users and the community can’t directly create markets, their input is invaluable—analyzed, verified, and implemented by the team.

## Market Information

Each market includes:

- **Title:** A clear, concise question (e.g., “Will Team X win the championship?”).
- **Options:** Resolution options, with a minimum of two mutually exclusive outcomes.
- **Rules:** Detailed conditions of the question, including resolution criteria and edge cases.
- **Resolution Type:** The method used to determine the outcome (e.g., FDC, social voting).
- **Currency:** The single currency for the market (e.g., USD equivalent or FLR). Multiple markets for the same question can exist in different currencies.
- **Time Frame:** The period during which the event and resolution will occur.

## Funding the Market

Market funding is how you help get a prediction market off the ground. Think of it like being the house at a casino—you’re providing the chips people use to bet.

When you fund a market, you deposit money into the platform’s **automated market maker (AMM)**. The AMM uses this liquidity to offer buy and sell prices on each possible outcome. Without funding, the market sits idle—untradeable.

Once funded, traders can jump in, place bets, and trade outcome tokens based on what they think will happen. Since you helped create that action, you earn a share of the fees generated whenever people trade.

### Why Fund a Market?

Every market needs liquidity to be tradeable. **IgniteMarket** typically seeds markets with some initial funding—but anyone can add more at any time. Here’s why you might want to:

#### Earn a Cut of Trading Fees

Every trade in the market generates a small fee. As a funder, you earn a share of those fees. More trading = more earnings.

#### Profit from Market Moves

Early funders often get in at neutral prices (like 50/50 odds). As bets roll in and prices shift, you can:

- Sell your position for a profit
- Stay exposed if you think the market’s mispriced

#### Back the Markets You Believe In

If you spot a market you’re confident will attract action—or one where you have an edge—you can fund it and potentially benefit from your insights.

### What Are the Risks?

#### Exposure to the Outcome

As a funder, you're on the other side of trades. If most users bet correctly and heavily on one outcome, you may incur a loss. This is particularly relevant in **imbalanced or high-certainty** markets with **low volume**.

#### Low Volume = Low Rewards

No trades = no fees. If the market doesn’t attract attention, your capital sits idle, and you may miss out on better opportunities elsewhere.

#### Liquidity is locked until market resolves

As a funder, you cannot remove your funding before the market resolves. Your liquidity is locked until the market outcome is finalized.

:::tip
While you can’t remove funding early, actively **monitor your outcome token positions**. Selling tokens when market sentiment shifts can help reduce exposure or lock in profits, even mid-market.
:::

#### Slippage Losses (Price Impact)

Because of how AMMs work (especially FixedProductMarketMaker), your initial funding can become disproportionately exposed to one outcome as trades roll in. This can lead to slippage-based loss, even before the market resolves.

#### Smart Traders Could Snipe You

If you fund early and odds are mispriced, savvy traders can take advantage of the prices you’ve helped set. Over time, this can eat into your returns — especially if you're not actively managing exposure.

### Recommendations for Funders

#### How much to Fund?

When deciding how much to fund, think in terms of your comfort level and the size of the market.

For a typical prediction market with around $10,000 in expected trading volume, a good starting point is to fund 5–10% of that volume — usually $500 to $1,000. This provides enough liquidity to attract traders and keeps your potential exposure at a manageable level.

Your capital is used to make the market tradeable, which means you're temporarily taking on exposure to the outcomes.

In a binary market, your theoretical maximum loss is limited and follows this formula:

Max loss=b⋅ln(2)≈69.3% of your funding

So if you fund the market with $1,000, the worst-case loss is about $693.

But that worst-case only happens if:

- Most traders bet on one side,
- they turn out to be correct, and
- there is very little volume resulting in low fees.

In practice, outcomes are more mixed, and many funders exit before resolution — reducing exposure. Plus, market sentiment often shifts over time, rebalancing positions naturally.

As a funder, you earn in two primary ways:

1. **Trading Fees**
   Every trade generates a 2% fee, and as a liquidity provider, you earn a share of that. For a market with $10,000 in total volume, that’s $200 in total fees, which are distributed among funders based on how much liquidity they provided and for how long.

2. **Market Movement**
   If you're early and market sentiment shifts your way, your outcome tokens may rise in value. This gives you the chance to exit at a profit, selling your position before resolution — much like a trader.

If you’re just getting started, fund a smaller amount and watch how the market behaves. You can always add more later, or exit early to manage exposure while still collecting your share of the fees.

#### When to Fund?

- **Early:** Get in before the odds move — great if you're confident the market will see action and trade imbalance will correct.

- **During Market Activity:** You can add funding after some trading has occurred — this can help you avoid early slippage exposure, but may offer worse price entry.

- **In Batches:** If supported, consider staggering your funding to better manage risk as market activity grows.

### Risk vs Reward at a Glance

This table summarizes the relationship between market risk and potential reward for liquidity providers in various funding scenarios. It includes both low- and high-volume markets and varying degrees of outcome imbalance.

| **Scenario**                           | **Risk Level** | **Reward Potential** |
| -------------------------------------- | -------------- | -------------------- |
| Balanced Market ($5k Volume)           | Medium         | Low                  |
| Balanced Market ($10k Volume)          | Low            | Moderate             |
| Balanced Market ($100k Volume)         | Very Low       | High                 |
| 60/40 Imbalance (High Volume)          | Low            | High                 |
| 70/30 Imbalance (High Volume)          | Medium         | Very High            |
| 35/65 Reversal Win (High Volume)       | High           | High                 |
| Crowd Correct (70% Right, High Volume) | High           | Low to Moderate      |
| 80/20 or 90/10 Skew (Low Volume)       | Very High      | Low                  |

## User-Generated Questions

While users can’t directly launch markets, they can propose ideas for consideration. The markets team evaluates proposals based on:

- **Demand:** Is there sufficient user interest and potential trading volume for an accurate probability?
- **Value:** Does the market’s probability offer meaningful insight?
- **Resolvability:** Can the market be conclusively resolved, and what resolution type is required?
- **Time Frame:** Is there a fixed period for resolution?

### Submit a Market Proposal

Visit our [Discord](https://discord.com/) to suggest a market. Create a proposal post, join discussions, and vote on ideas. Include:

- Market title
- Detailed rules
- Proposed resolution source and type
- Evidence of demand (e.g., community feedback, potential trading interest)

Proposals with high community votes and feasibility are prioritized.

## How Is Market Price Determined?

Each prediction market supports multiple outcomes, with share prices reflecting market dynamics.

### Initial Share Price Allocation

Without prior probabilities, share prices start evenly distributed:

- 2 Outcomes: 50% each
- 3 Outcomes: 33.33% each
- 4 Outcomes: 25% each

### Dynamic Price Adjustments

Prices evolve with trading activity via the Gnosis FPMM model. Higher demand for an outcome increases its price, reducing others, while the total always sums to 100%.

### Example Simple Scenario

Outcome prices always total 100%, with final payouts rounded to the nearest 10th multiplier (e.g., 1, 10, 100), typically resolving to $1 per share, plus a fee.

- **Setup:**

  - User A owns 10 “A” shares at $0.25.
  - User B owns 10 “A” shares at $0.25.
  - User C owns 10 “B” shares at $0.25.
  - User D owns 10 “C” shares at $0.25.
  - Total pool: $10 (2.5 “A” + 2.5 “A” + 2.5 “B” + 2.5 “C”).

- **Adjustment:**
  If User D buys 10 more “C” shares, prices shift:

  - A: 20 shares ($0.20 each), B: 10 shares ($0.20 each), C: 20 shares ($0.20 each).
  - New pool: $10 (4 “A” + 2 “B” + 4 “C”).

- **Resolution:**
  - If “C” wins: User D gets $10 (10 shares × $1) minus a fee.
  - If “A” wins: Users A and B split $10 proportionally (50% each, $5 minus fee).
