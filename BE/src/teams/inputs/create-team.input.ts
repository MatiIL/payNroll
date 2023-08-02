import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTeamInput {
  @Field()
  name: string;

  @Field()
  manager_id: string;

  @Field(() => Int)
  nextYearBudget: number;

  // Add the following fields based on your schema structure
  @Field(() => [PlayerInput])
  currentRoster: PlayerInput[];

  @Field(() => [[PlayerInput]])
  prevRosters: PlayerInput[][];

  @Field(() => [DraftRecordInput])
  draftRecord: DraftRecordInput[];
}

@InputType()
class PlayerInput {
  @Field()
  player: string;

  @Field(() => Int)
  purchasePrice: number;

  @Field(() => Int)
  keeperStatus: number;

  @Field(() => Int)
  YOS: number;
}

@InputType()
class DraftRecordInput {
  @Field(() => Int)
  season: number;

  @Field(() => Int)
  draftPosition: number;

  @Field()
  playerDrafted: string;
}

