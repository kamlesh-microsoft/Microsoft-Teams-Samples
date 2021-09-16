import { Flex, Card, Text, NotesIcon } from '@fluentui/react-northstar'
import "../../recruiting-details/recruiting-details.css"

const Timeline = () => {
    const rowsPlain = [
        {
            key: 1,
            items: [
                {

                    key: '1-1',
                },
                {
                    content: 'Roman van von der Longername',
                    key: '1-2',
                    id: 'name-1',
                },
                {
                    content: 'None',
                    key: '1-3',
                },
                {
                    content: '30 years',
                    key: '1-4',
                    id: 'age-1',
                },
            ]
        }
    ];
    return (
        <Card fluid aria-roledescription="card with basic details" className="timeline-card">
            <Card.Header>
                <Flex gap="gap.small">
                    <Text content="Timeline" weight="bold" />
                </Flex>
                <hr className="details-separator" />
            </Card.Header>
            <Card.Body>
                <Flex gap="gap.small" className="timeline" column>
                    <Flex gap="gap.small" className="timelineContainer">
                        <Flex column className="timelineDetail">
                           <Text content='26 Nov, 2020' />
                           <Text content='14:00' />
                        </Flex>
                        <Flex column className="timelineDetail">
                           <Text content='Stage' />
                           <Text content='Shortlisted' />
                        </Flex>
                        <Flex column className="timelineDetail">
                           <Text content='Hiring Team' />
                           <Text content='Daniela' />
                        </Flex>
                        <Flex column className="timelineDetail">
                           <Text content='Result' />
                           <Text content='Shortlisted' />
                        </Flex>
                        <Flex>
                            <NotesIcon />
                        </Flex>
                    </Flex>
                    <Flex gap="gap.small" className="timelineContainer">
                        <Flex column className="timelineDetail">
                           <Text content='26 Nov, 2020' />
                           <Text content='14:00' />
                        </Flex>
                        <Flex column className="timelineDetail">
                           <Text content='Stage' />
                           <Text content='Round 1' />
                        </Flex>
                        <Flex column className="timelineDetail">
                           <Text content='Hiring Team' />
                           <Text content='Ray' />
                        </Flex>
                        <Flex column className="timelineDetail">
                           <Text content='Result' />
                           <Text content='Hire' />
                        </Flex>
                        <Flex>
                            <NotesIcon />
                        </Flex>
                    </Flex>
                </Flex>
            </Card.Body>
        </Card>
    )
}

export default (Timeline);