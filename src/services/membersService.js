import { api, useMocks } from "./api";
import { membersMock } from "../data/mockData";

const MEMBERS_KEY = "church_members";

function readMembers() {
  const storedMembers = localStorage.getItem(MEMBERS_KEY);
  if (!storedMembers) {
    localStorage.setItem(MEMBERS_KEY, JSON.stringify(membersMock));
    return membersMock;
  }
  return JSON.parse(storedMembers);
}

function writeMembers(members) {
  localStorage.setItem(MEMBERS_KEY, JSON.stringify(members));
}

export async function getMembers() {
  if (useMocks) return readMembers();
  const response = await api.get("/members");
  return response.data;
}

export async function getMemberById(id) {
  if (useMocks) return readMembers().find((member) => String(member.id) === String(id));
  const response = await api.get(`/members/${id}`);
  return response.data;
}

export async function saveMember(member) {
  if (useMocks) {
    const members = readMembers();
    if (member.id) {
      const updatedMembers = members.map((item) =>
        String(item.id) === String(member.id) ? { ...item, ...member } : item
      );
      writeMembers(updatedMembers);
      return member;
    }

    const newMember = { ...member, id: Date.now(), active: true };
    writeMembers([...members, newMember]);
    return newMember;
  }

  if (member.id) {
    const response = await api.put(`/members/${member.id}`, member);
    return response.data;
  }

  const response = await api.post("/members", member);
  return response.data;
}

export async function removeMember(id) {
  if (useMocks) {
    writeMembers(readMembers().filter((member) => String(member.id) !== String(id)));
    return true;
  }

  await api.delete(`/members/${id}`);
  return true;
}
