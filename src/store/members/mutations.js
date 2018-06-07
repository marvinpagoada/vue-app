import {replace, remove} from "../../helpers";

export const loadMemberStatusRequest = state => state.loadMemberStatus = 'Request';
export const loadMemberStatusSuccess = state => state.loadMemberStatus = 'Success';
export const loadMemberStatusFailure = state => state.loadMemberStatus = 'Failure';

export const loadTeamMembersStatusRequest = state => {
    state.loadTeamMembersStatus = 'Request';
    state.items = []
};
export const loadTeamMembersStatusSuccess = (state, res) => {
    state.loadTeamMembersStatus = 'Success';
    state.items = res.data.data
};

export const loadTeamMembersStatusFailure = state => state.loadTeamMembersStatus = 'Failure';

export const inviteMemberToTeamStatusRequest = state => state.inviteMemberToTeamStatus = 'Request';
export const inviteMemberToTeamStatusSuccess = (state, res) => {
    state.inviteMemberToTeamStatus = 'Success';
    state.items.push(res.data.member);
};
export const inviteMemberToTeamStatusFailure = state => state.inviteMemberToTeamStatus = 'Failure';

export const joinMemberToTeamStatusRequest = state => state.joinMemberToTeamStatus = 'Request';
export const joinMemberToTeamStatusSuccess = state => state.joinMemberToTeamStatus = 'Success';
export const joinMemberToTeamStatusFailure = state => state.joinMemberToTeamStatus = 'Failure';

export const changeMemberRoleStatusRequest = state => state.changeMemberRoleStatus = 'Request';
export const changeMemberRoleStatusSuccess = (state, res) => {
    state.changeMemberRoleStatus = 'Success';
    replace(state.items, res.data.member)
};
export const changeMemberRoleStatusFailure = state => state.changeMemberRoleStatus = 'Failure';

export const retryMemberInvitationStatusRequest = state => state.retryMemberInvitationStatus = 'Request';
export const retryMemberInvitationStatusSuccess = state => state.retryMemberInvitationStatus = 'Success';
export const retryMemberInvitationStatusFailure = state => state.retryMemberInvitationStatus = 'Failure';

export const excludeMemberFromTeamStatusRequest = state => state.excludeMemberFromTeamStatus = 'Request';
export const excludeMemberFromTeamStatusSuccess = (state, res) => {
    state.excludeMemberFromTeamStatus = 'Success';
    remove(state.items, res.data.member)
};
export const excludeMemberFromTeamStatusFailure = state => state.excludeMemberFromTeamStatus = 'Failure';