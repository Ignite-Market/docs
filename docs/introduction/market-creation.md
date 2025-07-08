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
As a funder, you’re part of the AMM. If most of the crowd bets one way and they’re right, you could end up paying out. Your profit depends on balanced trading and the final result.

#### Low Volume = Low Rewards
No trades? No fees. If a market gets little attention, your earnings might be minimal (or even zero), while your funds were tied up.

#### Price Exposure Swings
Markets can move fast. If sentiment shifts heavily while you’re funded, you might end up stuck with more exposure to the losing side unless you exit in time.

#### Smart Traders Could Snipe You
Remember, you’re providing the liquidity. If sharp traders spot mispriced odds, they can trade against you, potentially taking profits at your expense.


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