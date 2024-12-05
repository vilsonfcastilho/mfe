import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useContext } from 'react';

import { CyclesContext } from '../../contexts/CyclesContext';

import { HistoryContainer, HistoryListContainer, Status } from './styles';

export function History() {
  const { cycles } = useContext(CyclesContext);
  
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryListContainer>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Done</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Suspended</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">In progress</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryListContainer>
    </HistoryContainer>
  );
}
