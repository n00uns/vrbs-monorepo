import { useHistory } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import classes from './MobileProposalVoteEvent.module.css';
import ProposalVoteInfoPillsContainer from '../../eventData/ProposalVoteInfoPillsContainer';
import { ProposalVoteEvent } from '../../../../wrappers/vrbsActivity';
import React from 'react';
import { getProposalVoteIcon } from '../../../../utils/activity/getProposalVoteIcon';
import ProposalVoteHeadline from '../../eventData/ProposalVoteHeadline';
import MobileActivityRow from '../../activityRow/MobileActivityRow';

interface MobileProposalVoteEventProps {
  event: ProposalVoteEvent;
}

const MobileProposalVoteEvent: React.FC<MobileProposalVoteEventProps> = props => {
  const { event } = props;
  const history = useHistory();
  const proposalOnClickHandler = () =>
    history.push(event.proposal.id ? `/vote/${event.proposal.id}` : '/vote');

  return (
    <MobileActivityRow
      onClick={proposalOnClickHandler}
      icon={
        <Image
          src={getProposalVoteIcon(event.proposal, event.vote.supportDetailed)}
          className={classes.voteIcon}
        />
      }
      primaryContent={
        <>
          <ProposalVoteHeadline
            proposal={event.proposal}
            voter={event.vote.voter}
            supportDetailed={event.vote.supportDetailed}
          />{' '}
          <span className={classes.proposalTitle}>{event.proposal.title}</span>
        </>
      }
      secondaryContent={<ProposalVoteInfoPillsContainer proposal={event.proposal} />}
    />
  );
};

export default MobileProposalVoteEvent;
